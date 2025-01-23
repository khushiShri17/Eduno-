import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, BookCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Academic Success Starts Here
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access organized study materials, previous year questions, and comprehensive notes all in one place.
          </p>
          <Link href="/features">
            <Button size="lg" className="mr-4">Get Started</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduVault</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Organized Notes"
              description="Access well-structured notes for all subjects, organized by semester and branch."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Previous Year Questions"
              description="Practice with a comprehensive collection of previous year questions."
            />
            <FeatureCard
              icon={<BookCheck className="h-8 w-8" />}
              title="Study Materials"
              description="Get access to curated study materials and resources."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              content="This platform saves valuable time by providing all essential study resources in one place, making preparation more efficient. With high-quality, affordable materials, it ensures that students have everything they need to succeed."
              author="Bhanu Vyas"
              role="Information Technology, Batch: 2023-2027"
            />
            <TestimonialCard
              content="This platform offers well-structured notes and comprehensive resources, making learning smarter and more efficient. It provides everything a student needs to excel academically. Having personally benefited from it, I highly recommend this platform to others."
              author="Khushi Pathariya"
              role="Information Technology, Batch: 2023-2027"
            />
            <TestimonialCard
              content="All-in-one study companion that gathers notes and everything we need in one place."
              author="Nandani Dubey"
              role="Information Technology, Batch: 2023-2027"
            />
            <TestimonialCard
              content="I've been using this website for my studies and it's been a informative source. The notes are concise, well-organized, and easy to understand."
              author="Pranjal kourav"
              role="Information Technology, Batch: 2023-2027"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ content, author, role }: { content: string; author: string; role: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="mb-4 text-muted-foreground">{content}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}