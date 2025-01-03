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
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
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
              content="EduVault has been a game-changer for my studies. The organized notes and PYQs helped me excel in my exams."
              author="Priya Singh"
              role="Computer Science, 3rd Year"
            />
            <TestimonialCard
              content="Having all resources in one place saves so much time. The quality of materials is exceptional!"
              author="Rahul Kumar"
              role="Mechanical Engineering, 4th Year"
            />
            <TestimonialCard
              content="The platform is user-friendly and the content is regularly updated. Highly recommended!"
              author="Amit Patel"
              role="Electronics, 2nd Year"
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