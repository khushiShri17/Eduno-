"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BranchSemesterSelector from "@/components/branch-semester-selector";
import SubjectList from "@/components/subject-list";

export default function FeaturesPage() {
  const searchParams = useSearchParams();
  const [showSubjects, setShowSubjects] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState(0);

  useEffect(() => {
    const branch = searchParams.get("branch");
    const semester = searchParams.get("semester");
    
    if (branch && semester) {
      setSelectedBranch(branch);
      setSelectedSemester(parseInt(semester));
      setShowSubjects(true);
    } else {
      setShowSubjects(false);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto py-8 px-4">
      {!showSubjects ? (
        <BranchSemesterSelector />
      ) : (
        <SubjectList branch={selectedBranch} semester={selectedSemester} />
      )}
    </div>
  );
}