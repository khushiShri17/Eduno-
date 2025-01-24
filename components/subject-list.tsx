"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Get subjects based on semester
const getSubjects = (branch: string, semester: number) => {
  if (semester === 2) {
    return [
      {
        id: "m2",
        name: "Mathematics-II",
        code: "BSC201",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      },
      {
        id: "ep",
        name: "Engineering Physics",
        code: "BSC202",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&h=300&fit=crop",
      },
    ];
  } else if (semester === 3) {
    return [
      {
        id: "eee",
        name: "Energy & Environmental Engineering",
        code: "ES301",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      },
      {
        id: "dm",
        name: "Discrete Mathematics",
        code: "IT302",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      },
      {
        id: "ds",
        name: "Data Structures",
        code: "IT303",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop",
      },
      {
        id: "oop",
        name: "Object Oriented Programming & Methodology",
        code: "IT304",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      },
      {
        id: "dcs",
        name: "Digital Circuit System",
        code: "IT305",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop",
      },
    ];
  }
  return [];
};

export default function SubjectList({
  branch,
  semester,
}: {
  branch: string;
  semester: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjects = getSubjects(branch, semester);

  const handleChangeSelection = () => {
    // Clear the URL parameters and return to selection
    router.push("/features");
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          {branch} - Semester {semester}
        </h2>
        <Button variant="outline" onClick={handleChangeSelection} className="w-full sm:w-auto">
          Change Selection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {subjects.map((subject) => (
          <Link 
            key={subject.id} 
            href={`/subject/${subject.id}?branch=${encodeURIComponent(branch)}&semester=${semester}`}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <Image
                src={subject.image}
                alt={subject.name}
                width={500}
                height={300}
                className="w-full h-40 md:h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-xs md:text-sm text-muted-foreground">
                  Subject Code: {subject.code}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
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