"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceSection from "./resource-section";
import { subjectResources } from "@/lib/data";

export default function SubjectContent({ 
  id, 
  subjectName 
}: { 
  id: string;
  subjectName: string;
}) {
  // Get resources for this specific subject
  const resources = subjectResources[id] || {
    notes: [],
    pyq: [],
    content: []
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">{subjectName}</h1>
      
      <Tabs defaultValue="notes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="pyq">Previous Year Questions</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <ResourceSection resources={resources.notes} />
        </TabsContent>

        <TabsContent value="pyq">
          <ResourceSection resources={resources.pyq} />
        </TabsContent>

        <TabsContent value="content">
          <ResourceSection resources={resources.content} />
        </TabsContent>

        <TabsContent value="others">
          <div className="text-center text-muted-foreground py-8">
            No resources available
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}