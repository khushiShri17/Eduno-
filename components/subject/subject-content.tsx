"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceSection from "./resource-section";
import { subjectResources } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";
import SyllabusSection from "./syllabus-section";

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
    important: [],
    syllabus: []
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
      
      <Tabs defaultValue="syllabus" className="space-y-4 md:space-y-6">
        <div className="flex justify-center overflow-x-auto pb-2 md:pb-0">
          <TabsList className="inline-flex h-auto md:h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm flex-wrap md:flex-nowrap gap-1">
          <TabsTrigger 
              value="syllabus"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white-foreground data-[state=active]:shadow-sm hover:bg-background/50 data-[state=active]:bg-background min-w-[60px] md:min-w-fit"
            >
              Syllabus
            </TabsTrigger>
            <TabsTrigger 
              value="notes" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white-foreground data-[state=active]:shadow-sm hover:bg-background/50 data-[state=active]:bg-background min-w-[60px] md:min-w-fit"
            >
              Notes
            </TabsTrigger>
            <TabsTrigger 
              value="pyq"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white-foreground data-[state=active]:shadow-sm hover:bg-background/50 data-[state=active]:bg-background min-w-[60px] md:min-w-fit"
            >
              PYQ
            </TabsTrigger>
            <TabsTrigger 
              value="content"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white-foreground data-[state=active]:shadow-sm hover:bg-background/50 data-[state=active]:bg-background min-w-[60px] md:min-w-fit"
            >
              Content
            </TabsTrigger>
            <TabsTrigger 
              value="important"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white-foreground data-[state=active]:shadow-sm hover:bg-background/50 data-[state=active]:bg-background min-w-[60px] md:min-w-fit"
            >
              Important
            </TabsTrigger>
            
          </TabsList>
        </div>

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
            <SyllabusSection units={resources.important} />
          ) : (
            <WorkInProgress />
          )}
        </TabsContent>

        <TabsContent value="syllabus">
          {resources.syllabus && resources.syllabus.length > 0 ? (
            <SyllabusSection units={resources.syllabus} />
          ) : (
            <WorkInProgress />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}