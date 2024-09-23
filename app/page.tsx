"use client";
import { useState } from "react";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Loom from "@/components/Loom";
import Signup from "@/components/SignupForm";

export default function Home() {
  const [interested, setInterested] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col p-8 justify-center items-center space-y-8">
        <Content setInterested={setInterested} interested={interested} />
        <div className="relative w-full max-w-3xl">
          <div
            className={`transition-all duration-500 ease-in-out ${
              interested
                ? "opacity-0 scale-95 -translate-y-4 pointer-events-none absolute"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <Loom />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              interested
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-105 translate-y-4 pointer-events-none absolute"
            }`}
          >
            <Signup />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
