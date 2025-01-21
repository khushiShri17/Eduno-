import type { Resource } from "./types";

export const subjects = [
  { id: "m2", name: "Mathematics-II" },
  { id: "1", name: "Data Structures" },
  { id: "2", name: "Computer Networks" },
  { id: "3", name: "Operating Systems" },
];

// Resources organized by subject ID
export const subjectResources: Record<string, {
  notes: Resource[];
  pyq: Resource[];
  content: Resource[];
}> = {
  "m2": { // Mathematics-II
    notes: [
      {
        id: "m2-unit1",
        title: "Unit 1 - Differential Calculus",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
        pdfUrl: "/pdfs/m2/unit1.pdf"
      },
      {
        id: "m2-unit2",
        title: "Unit 2 - Integral Calculus",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        pdfUrl: "/pdfs/m2/unit2.pdf"
      },
      {
        id: "m2-unit3",
        title: "Unit 3 - Differential Equations",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        pdfUrl: "/pdfs/m2/unit3.pdf"
      },
      {
        id: "m2-unit4",
        title: "Unit 4 - Matrices",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        pdfUrl: "/pdfs/m2/unit4.pdf"
      },
      {
        id: "m2-unit5",
        title: "Unit 5 - Complex Numbers",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        pdfUrl: "/pdfs/m2/unit5.pdf"
      }
    ],
    pyq: [],
    content: []
  },
  // ... rest of the subjects remain the same
};