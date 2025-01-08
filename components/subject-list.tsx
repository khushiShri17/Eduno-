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
      name: "Energy & Enviromental Engineering",
      code: "ES-301",
      image: "https://media.licdn.com/dms/image/v2/C511BAQEFUoQoymunEQ/company-background_10000/company-background_10000/0/1584404294842/global_energy__environmental_engineering_services_ltd_cover?e=1736953200&v=beta&t=A2nqH09Vcnm_X3guH3o34wn3iVTiqwyk2xh3uzscyW4",
    },
    {
      id: "2",
      name: "Discrete Structure",
      code: "IT-302",
      image: "https://beta.bgscollege.in/wp-content/uploads/2022/07/DISCRETE-STRUCTURE.png",
    },
    {
      id: "3",
      name: "Data Structure",
      code: "IT-303",
      image: "https://i.ytimg.com/vi/Qmt0QwzEmh0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAYZvp1_7HVUd7kk9mRYfTfNswGag",
    },
    {
      id: "4",
      name: "Object Oriented Programming & Methodology",
      code: "IT-304",
      image: "https://miro.medium.com/v2/resize:fit:600/0*7zMicw-FfThCbN35.png",
    },
    {
      id: "5",
      name: "Digital Circuits & Systems",
      code: "IT-305",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauJEKpxWENy7y1Jvwe2vjIh87M92NKcocrw&s",
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