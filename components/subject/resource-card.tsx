"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video } from "lucide-react";
import PDFViewerModal from "./pdf-viewer-modal";
import { Note, YearWisePYQ, UnitWisePYQ, ContentResource } from "@/lib/types";

type ResourceType = Note | YearWisePYQ | UnitWisePYQ | ContentResource;

// Function to get background color based on resource type
const getBackgroundColor = (resource: ResourceType) => {
  if ('contributor' in resource) return 'bg-blue-500/10 hover:bg-blue-500/20';
  if ('year' in resource) return 'bg-purple-500/10 hover:bg-purple-500/20';
  if ('unit' in resource) return 'bg-green-500/10 hover:bg-green-500/20';
  return 'bg-orange-500/10 hover:bg-orange-500/20';
};

export default function ResourceCard({ resource }: { resource: ResourceType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (resource.pdfUrl) {
      setIsModalOpen(true);
    } else if ('videoUrl' in resource && resource.videoUrl) {
      window.open(resource.videoUrl, '_blank');
    }
  };

  const renderDetails = () => {
    if ('contributor' in resource) {
      return <p>Contributor: {resource.contributor}</p>;
    } else if ('year' in resource) {
      return <p>Year: {resource.year}</p>;
    } else if ('unit' in resource) {
      return <p>Unit: {resource.unit}</p>;
    } else if ('uploadedBy' in resource) {
      return (
        <>
          <p>Uploaded by: {resource.uploadedBy}</p>
          <p>Date: {resource.uploadedOn}</p>
        </>
      );
    }
  };

  const bgColor = getBackgroundColor(resource);

  return (
    <>
      <Card 
        className={`${(resource.pdfUrl || 'videoUrl' in resource) ? 'cursor-pointer' : ''} 
          transition-all duration-300 group ${bgColor} border-none`}
        onClick={handleClick}
      >
        <div className="absolute top-4 right-4">
          {resource.fileType === 'PDF' ? (
            <FileText className="h-6 w-6 text-muted-foreground/50" />
          ) : (
            <Video className="h-6 w-6 text-muted-foreground/50" />
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2">{resource.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            {renderDetails()}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                {resource.subjectCode}
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10">
                Sem {resource.semester}
              </span>
              <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-700/10">
                {resource.fileType}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {resource.pdfUrl && (
        <PDFViewerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pdfUrl={resource.pdfUrl}
          title={resource.title}
        />
      )}
    </>
  );
}