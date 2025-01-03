"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { Resource } from "@/lib/types";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card>
      <Image
        src={resource.thumbnail}
        alt={resource.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardHeader>
        <CardTitle className="text-xl">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Type: {resource.type}</p>
          <p>Uploaded by: {resource.uploadedBy}</p>
          <p>Date: {resource.uploadedOn}</p>
          <p>Format: {resource.fileType}</p>
        </div>
      </CardContent>
    </Card>
  );
}