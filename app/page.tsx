"use client";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Loom from "@/components/Loom";

export default function Home() {
  return (
    <main className="flex flex-col p-8 justify-center items-center space-y-8 h-screen">
      <Content />
      <Loom />
      <Footer />
    </main>
  );
}
