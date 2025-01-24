"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative animate-pulse">
        <Image
          src="/logo.png"
          alt="Loading..."
          width={100}
          height={100}
          className="animate-bounce"
          priority
        />
      </div>
    </div>
  );
}