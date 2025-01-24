"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  return (
    <nav className="border-b dark:bg-black sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:scale-105">
            <Image 
              src={theme === 'dark' ? '/dark.png' : '/light.png'} 
              alt="Logo" 
              width={120} 
              height={120} 
              priority
            />
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
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

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Link 
              href="https://chat.whatsapp.com/D3sGnPCE4HrH2hcDOcMcKK" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="sm" className="button-hover">Join Our Community</Button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/features"
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  pathname === "/features" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact"
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <ModeToggle />
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="button-hover">Feedback</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}