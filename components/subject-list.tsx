"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Subject {
  id: string;
  name: string;
  code: string;
  image: string;
}

// Mock data - replace with actual API call
const getSubjects = (branch: string, semester: number): Subject[] => {
  return [
    {
      id: "1",
      name: "Data Structures",
      code: "CS201",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
    },
    {
      id: "2",
      name: "Computer Networks",
      code: "CS202",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    },
    {
      id: "3",
      name: "Operating Systems",
      code: "CS203",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop",
    },
  ];
};

export default function SubjectList({
  branch,
  semester,
}: {
  branch: string;
  semester: number;
}) {
  const subjects = getSubjects(branch, semester);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          {branch} - Semester {semester}
        </h2>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Change Selection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/subject/${subject.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <Image
                src={subject.image}
                alt={subject.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Subject Code: {subject.code}
                </p>
                <p className="text-sm text-muted-foreground">
                  {branch} - Semester {semester}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}