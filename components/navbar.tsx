"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">Eduno</span>
        </Link>
        
        <div className="flex items-center space-x-6 ml-6">
          <Link 
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/features"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/features" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          
          <Link href="/feedback">
            <Button size="sm">Feedback</Button>
          </Link>
          {/* <Link href="/login">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}