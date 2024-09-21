import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Content() {
  return (
    <div className="flex flex-col space-y-12 items-center text-left md:text-center animate-slide-in-bottom max-w-3xl py-8">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl lg:text-6xl font-semibold">
          Two API&apos;s. <br></br>
          One workflow.
        </h2>
        <p className="text-md md:text-xl text-gray-500 max-w-2xl">
          You give us the docs, we generate the workflow - from document
          generation to flashcard creation.
        </p>
      </div>
      <Link
        href="/signup"
        className="text-center bg-blue-600 hover:bg-blue-500 py-2 px-4 text-slate-100 rounded-md font-medium w-full md:w-auto md:px-6 shadow-xl"
      >
        Sign up for the Waitlist
      </Link>
    </div>
  );
}
