"use client";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [signup, setSignup] = useState();

  // if (signup) {
  // 	return (

  // 	)
  // }

  return (
    <main className="flex flex-col h-screen p-8 justify-between items-center">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
