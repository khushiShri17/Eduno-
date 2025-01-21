"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const branches = [
  "Information Technology",
];

const semesters = [2, 3] // Added 2nd semester

export default function BranchSemesterSelector({
  onSubmit,
}: {
  onSubmit: (branch: string, semester: number) => void;
}) {
  const [branch, setBranch] = useState<string>("");
  const [semester, setSemester] = useState<number>(0);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <Select onValueChange={(value) => setBranch(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSemester(parseInt(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map((s) => (
              <SelectItem key={s} value={s.toString()}>
                Semester {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="w-full"
          onClick={() => onSubmit(branch, semester)}
          disabled={!branch || !semester}
        >
          View Resources
        </Button>
      </CardContent>
    </Card>
  );
}