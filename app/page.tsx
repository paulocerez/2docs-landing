"use client";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col h-screen p-8 justify-between items-center space-y-4">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
