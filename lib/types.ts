export interface Resource {
  id: string;
  title: string;
  type: string;
  uploadedBy: string;
  uploadedOn: string;
  fileType: string;
  thumbnail: string;
  pdfUrl?: string; // Added for PDF links
}