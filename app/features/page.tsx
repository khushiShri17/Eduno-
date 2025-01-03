"use client";

import { useState } from "react";
import BranchSemesterSelector from "@/components/branch-semester-selector";
import SubjectList from "@/components/subject-list";

export default function FeaturesPage() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [showSubjects, setShowSubjects] = useState(false);

  const handleSelection = (branch: string, semester: number) => {
    setSelectedBranch(branch);
    setSelectedSemester(semester);
    setShowSubjects(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Academic Resources</h1>
      
      {!showSubjects ? (
        <BranchSemesterSelector onSubmit={handleSelection} />
      ) : (
        <SubjectList branch={selectedBranch} semester={selectedSemester} />
      )}
    </div>
  );
}