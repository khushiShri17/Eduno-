"use client";

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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-4">
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
        <div className="w-full h-[60vh]"> {/* Adjust the height for PDF view */}
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-lg"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
