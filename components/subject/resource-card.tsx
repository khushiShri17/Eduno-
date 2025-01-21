"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { Resource } from "@/lib/types";
import PDFViewerModal from "./pdf-viewer-modal";

export default function ResourceCard({ resource }: { resource: Resource }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (resource.pdfUrl) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Card 
        className={`${resource.pdfUrl ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
        onClick={handleClick}
      >
        <Image
          src={resource.thumbnail}
          alt={resource.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle className="text-xl">{resource.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Type: {resource.type}</p>
            <p>Uploaded by: {resource.uploadedBy}</p>
            <p>Date: {resource.uploadedOn}</p>
            <p>Format: {resource.fileType}</p>
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