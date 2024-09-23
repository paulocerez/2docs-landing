"use client";
import { useState } from "react";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Loom from "@/components/Loom";
import Signup from "@/components/SignupForm";

export default function Home() {
  const [interested, setInterested] = useState(false);

  return (
    <main className="flex flex-col p-8 justify-center items-center space-y-8 h-screen">
      <Content setInterested={setInterested} interested={interested} />
      <div className="relative w-full max-w-3xl h-[324px] overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            interested
              ? "opacity-0 scale-95 -translate-y-4 pointer-events-none"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <Loom />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            interested
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-105 translate-y-4 pointer-events-none"
          }`}
        >
          <Signup />
        </div>
      </div>
      <Footer />
    </main>
  );
}
