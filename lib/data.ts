import type { Resource } from "./types";

export const subjects = [
  // 2nd Semester
  { id: "m2", name: "Mathematics-II" },
  { id: "ep", name: "Engineering Physics" },
  
  // 3rd Semester
  { id: "eee", name: "Energy & Environmental Engineering" },
  { id: "dm", name: "Discrete Mathematics" },
  { id: "ds", name: "Data Structures" },
  { id: "oop", name: "Object Oriented Programming & Methodology" },
  { id: "dcs", name: "Digital Circuit System" }
];

export const subjectResources: Record<string, {
  notes: Resource[];
  pyq: Resource[];
  content: Resource[];
  important: Resource[];
}> = {
  // 2nd Semester Subjects
  "m2": {
    notes: [
      {
        id: "m2-notes-1",
        title: "Unit 1 - Differential Calculus",
        type: "Notes",
        uploadedBy: "Prof. Mathematics",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
        pdfUrl: "https://drive.google.com/file/d/1-xAhw0jdSwGPovKeLZyh9vdSsQZYL5Cd/view?usp=sharing" // Replace with actual Drive URL
      }
    ],
    pyq: [
      {
        id: "m2-pyq-1",
        title: "Mathematics-II 2023 End Sem",
        type: "Previous Year Question",
        uploadedBy: "Admin",
        uploadedOn: "2024-03-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        pdfUrl: "https://drive.google.com/file/d/0987654321/preview" // Replace with actual Drive URL
      }
    ],
    content: [
      {
        id: "m2-content-1",
        title: "Calculus Made Easy",
        type: "Video Content",
        uploadedBy: "MathBetter",
        uploadedOn: "2024-03-20",
        fileType: "Video",
        thumbnail: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=500&h=300&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example1" // Replace with actual YouTube URL
      }
    ],
    important: []
  },
  "ep": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  },

  // 3rd Semester Subjects
  "eee": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  },
  "dm": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  },
  "ds": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  },
  "oop": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  },
  "dcs": {
    notes: [],
    pyq: [],
    content: [],
    important: []
  }
};