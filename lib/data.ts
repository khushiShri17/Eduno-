import type { Resource } from "./types";

export const subjects = [
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
  "1": { // Data Structures
    notes: [
      {
        id: "1",
        title: "Arrays and Linked Lists Notes",
        type: "Handwritten",
        uploadedBy: "Prof. Smith",
        uploadedOn: "2024-03-15",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&h=300&fit=crop",
      },
      {
        id: "2",
        title: "Trees and Graphs Notes",
        type: "Typed",
        uploadedBy: "Prof. Smith",
        uploadedOn: "2024-03-16",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      },
    ],
    pyq: [
      {
        id: "3",
        title: "DSA Mid Semester 2023",
        type: "Previous Year Question",
        uploadedBy: "Admin",
        uploadedOn: "2024-02-20",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&h=300&fit=crop",
      },
    ],
    content: [
      {
        id: "4",
        title: "Data Structures Fundamentals",
        type: "Video Lecture",
        uploadedBy: "Tech Academy",
        uploadedOn: "2024-03-10",
        fileType: "Video",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      },
    ],
  },
  "2": { // Computer Networks
    notes: [
      {
        id: "5",
        title: "OSI Model Complete Notes",
        type: "Handwritten",
        uploadedBy: "Prof. Johnson",
        uploadedOn: "2024-03-15",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      },
    ],
    pyq: [
      {
        id: "6",
        title: "Networks Final Exam 2023",
        type: "Previous Year Question",
        uploadedBy: "Admin",
        uploadedOn: "2024-02-25",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      },
    ],
    content: [
      {
        id: "7",
        title: "TCP/IP Protocol Suite",
        type: "Video Lecture",
        uploadedBy: "Tech Academy",
        uploadedOn: "2024-03-12",
        fileType: "Video",
        thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      },
    ],
  },
  "3": { // Operating Systems
    notes: [
      {
        id: "8",
        title: "Process Management Notes",
        type: "Handwritten",
        uploadedBy: "Prof. Williams",
        uploadedOn: "2024-03-18",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop",
      },
    ],
    pyq: [
      {
        id: "9",
        title: "OS Mid Term 2023",
        type: "Previous Year Question",
        uploadedBy: "Admin",
        uploadedOn: "2024-02-28",
        fileType: "PDF",
        thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
      },
    ],
    content: [
      {
        id: "10",
        title: "Memory Management",
        type: "Video Lecture",
        uploadedBy: "Tech Academy",
        uploadedOn: "2024-03-15",
        fileType: "Video",
        thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop",
      },
    ],
  },
};