"use client"

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t dark:bg-black">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src={theme === 'dark' ? '/dark.png' : '/light.png'}
                alt="Logo" 
                width={120} 
                height={120} 
                className="w-10 h-10 md:w-[120px] md:h-[120px]"
                priority
              />
            </Link>
            {/* <p className="mt-2 text-xs md:text-sm dark:text-gray-300">
              Your trusted platform for academic resources.
            </p> */}
          </div>
          
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/features" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Resources</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link href="/notes" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/pyq" className="text-xs md:text-sm dark:text-gray-300 hover:text-primary">
                  Previous Year Questions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3 dark:text-white">Contact</h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="text-xs md:text-sm dark:text-gray-300 break-words">
                Email: anshmishraa.8708@gmail.com
              </li>
              <li className="text-xs md:text-sm dark:text-gray-300">
                Phone: +91 7771003775
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t text-center text-xs md:text-sm dark:text-gray-400">
          © {new Date().getFullYear()} Eduno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}