"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b dark:bg-gray-800">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Eduno Logo" width={120} height={40} className="dark:invert" />
        </Link>
        
        <div className="flex-1 flex justify-center items-center space-x-8">
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

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/feedback">
            <Button size="sm">Feedback</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}