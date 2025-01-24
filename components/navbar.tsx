"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b dark:bg-black sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2 hover:scale-105">
          <Image src="/logo.png" alt="Eduno Logo" width={60} height={60}  />
        </Link>
        
        <div className="flex-1 flex justify-center items-center space-x-8">
          <Link 
            href="/"
            className={`nav-link text-sm font-medium transition-all duration-300 hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/features"
            className={`nav-link text-sm font-medium transition-all duration-300 hover:text-primary ${
              pathname === "/features" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/contact"
            className={`nav-link text-sm font-medium transition-all duration-300 hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/contact">
            <Button size="sm" className="button-hover">Feedback</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}