"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceSection from "./resource-section";
import { subjectResources } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function SubjectContent({ 
  id, 
  subjectName 
}: { 
  id: string;
  subjectName: string;
}) {
  const resources = subjectResources[id] || {
    notes: { rgpv: [], college: [] },
    pyq: { yearWise: [], unitWise: [] },
    content: [],
    important: []
  };

  const WorkInProgress = () => (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <Wrench className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">Work in Progress</h3>
        <p className="text-muted-foreground text-center">
          We're currently working on adding content to this section. Check back soon!
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">{subjectName}</h1>
      
      <Tabs defaultValue="notes" className="space-y-6">
        <TabsList className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg ">
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="pyq">Previous Year Questions</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">RGPV Notes</h2>
              {resources.notes.rgpv.length > 0 ? (
                <ResourceSection resources={resources.notes.rgpv} />
              ) : (
                <WorkInProgress />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">College Notes</h2>
              {resources.notes.college.length > 0 ? (
                <ResourceSection resources={resources.notes.college} />
              ) : (
                <WorkInProgress />
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pyq">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Year Wise Questions</h2>
              {resources.pyq.yearWise.length > 0 ? (
                <ResourceSection resources={resources.pyq.yearWise} />
              ) : (
                <WorkInProgress />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Unit Wise Questions</h2>
              {resources.pyq.unitWise.length > 0 ? (
                <ResourceSection resources={resources.pyq.unitWise} />
              ) : (
                <WorkInProgress />
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="content">
          {resources.content.length > 0 ? (
            <ResourceSection resources={resources.content} />
          ) : (
            <WorkInProgress />
          )}
        </TabsContent>

        <TabsContent value="important">
          {resources.important.length > 0 ? (
            <ResourceSection resources={resources.important} />
          ) : (
            <WorkInProgress />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}