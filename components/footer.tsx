import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl">EduVault</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Your trusted platform for academic resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/notes" className="text-sm text-muted-foreground hover:text-primary">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/pyq" className="text-sm text-muted-foreground hover:text-primary">
                  Previous Year Questions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: anshmishraa.8708@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +91 7771003775
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EduVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}