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
      <CardContent className="flex flex-col items-center justify-center py-8 md:py-12">
        <Wrench className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg md:text-xl font-semibold mb-2">Work in Progress</h3>
        <p className="text-sm md:text-base text-muted-foreground text-center">
          We're currently working on adding content to this section. Check back soon!
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-6 md:py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{subjectName}</h1>
      
      <Tabs defaultValue="notes" className="space-y-4 md:space-y-6">
      <TabsList
  className="
    bg-white dark:bg-gray-800 
    rounded-lg 
    p-0 md:p-3 
    shadow-lg 
    w-full 
    flex flex-wrap 
    gap-2 
    h-auto
    max-h-[50vh] 
    overflow-y-auto
  "
>
          <TabsTrigger value="notes" className="text-xs md:text-sm py-1.5 md:py-2 flex-1">Notes</TabsTrigger>
          <TabsTrigger value="pyq" className="text-xs md:text-sm py-1.5 md:py-2 flex-1">Previous Year</TabsTrigger>
          <TabsTrigger value="content" className="text-xs md:text-sm py-1.5 md:py-2 flex-1">Content</TabsTrigger>
          <TabsTrigger value="important" className="text-xs md:text-sm py-1.5 md:py-2 flex-1">Important</TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">RGPV Notes</h2>
              {resources.notes.rgpv.length > 0 ? (
                <ResourceSection resources={resources.notes.rgpv} />
              ) : (
                <WorkInProgress />
              )}
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">College Notes</h2>
              {resources.notes.college.length > 0 ? (
                <ResourceSection resources={resources.notes.college} />
              ) : (
                <WorkInProgress />
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pyq">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">Year Wise Questions</h2>
              {resources.pyq.yearWise.length > 0 ? (
                <ResourceSection resources={resources.pyq.yearWise} />
              ) : (
                <WorkInProgress />
              )}
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">Unit Wise Questions</h2>
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