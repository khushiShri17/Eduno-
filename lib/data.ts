import type { Resource } from "./types";

export const subjects = [
  { id: "1", name: "Data Structures" },
  { id: "2", name: "Computer Networks" },
  { id: "3", name: "Operating Systems" },
];

export const mockResources: Record<string, Resource[]> = {
  notes: [
    {
      id: "1",
      title: "Complete Chapter 1 Notes",
      type: "Handwritten",
      uploadedBy: "Prof. Smith",
      uploadedOn: "2024-03-15",
      fileType: "PDF",
      thumbnail: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&h=300&fit=crop",
    },
  ],
  pyq: [
    {
      id: "2",
      title: "Mid Semester Exam 2023",
      type: "Previous Year Question",
      uploadedBy: "Admin",
      uploadedOn: "2024-02-20",
      fileType: "PDF",
      thumbnail: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&h=300&fit=crop",
    },
  ],
  content: [
    {
      id: "3",
      title: "Data Structures Fundamentals",
      type: "Video Lecture",
      uploadedBy: "Tech Academy",
      uploadedOn: "2024-03-10",
      fileType: "Video",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    },
  ],
};