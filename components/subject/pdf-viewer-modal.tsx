"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: PDFViewerModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  // Extract the FileID from the Google Drive link
  const extractFileId = (url: string) => {
    const match = url.match(/\/file\/d\/(.*?)\/view/);
    return match ? match[1] : null;
  };

  const fileId = extractFileId(pdfUrl);

  // Generate the direct download link
  const downloadUrl = fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : pdfUrl;

  const handleDownload = () => {
    setIsDownloading(true); // Show the downloading message

    // Create a hidden anchor element for downloading
    const link = document.createElement("a");
    link.href = downloadUrl; // Use the direct download link
    link.download = `${title}.pdf`; // Set the file name
    link.style.display = "none"; // Hide the anchor element
    document.body.appendChild(link); // Append it to the DOM
    link.click(); // Programmatically click to trigger the download
    document.body.removeChild(link); // Clean up by removing the element

    // Hide the downloading message after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="max-w-4xl p-4">
    <div className="flex items-center justify-between mb-4">
      <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
      <div className="flex items-center space-x-4">
        {/* Shifted Download Button Left */}
        <Button onClick={handleDownload} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          aria-label="Close"
          className="p-2"
        >
          
        </Button>
      </div>
    </div>
    {isDownloading && (
      <p className="text-green-500 text-sm mb-4">
        Your file is getting ready to download...
      </p>
    )}
    <div className="w-full h-[60vh]">
      {/* Optional PDF Preview */}
      {fileId ? (
        <iframe
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full rounded-lg"
          title={title}
        />
      ) : (
        <p className="text-red-500">Invalid Google Drive link</p>
      )}
    </div>
  </DialogContent>
</Dialog>

    </Dialog>
  );
}
