"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SyllabusUnit } from "@/lib/types";
import { BookOpen } from "lucide-react";

// Array of background colors for cards
const bgColors = [
  'bg-blue-50 dark:bg-blue-900/20',
  'bg-purple-50 dark:bg-purple-900/20',
  'bg-pink-50 dark:bg-pink-900/20',
  'bg-green-50 dark:bg-green-900/20',
  'bg-orange-50 dark:bg-orange-900/20',
];

// Get a random color from the array
const getRandomColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

export default function SyllabusSection({ units }: { units: SyllabusUnit[] }) {
  return (
    <div className="space-y-4">
      {units.map((unit) => {
        const randomColor = getRandomColor();
        return (
          <Card 
            key={unit.unit}
            className={`w-full transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 group animate-fade-in ${randomColor} border-none`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/50 dark:bg-white/10 flex items-center justify-center group-hover:bg-white/70 dark:group-hover:bg-white/20 transition-colors duration-300">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Unit {unit.unit}: {unit.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {unit.topics.map((topic, index) => (
                  <li key={index} className="group-hover:text-foreground transition-colors duration-300">
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}