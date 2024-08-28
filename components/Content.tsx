import { useState } from "react";
import { Button } from "./ui/button";
import Signup from "./SignupForm";
import Image from "next/image";

export default function Content() {
  const [signup, setSignup] = useState(false);

  if (signup) {
    return <Signup />;
  }

  return (
    <div className="flex flex-col space-y-16 items-center text-center animate-slide-in-bottom max-w-3xl">
      <Image
        src="/waiter-graphic.svg"
        alt="overview"
        width={450}
        height={300}
      />
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl">{"<2docs/>"}</h1>
        <h2 className="text-4xl font-semibold">
          Combine two or more API docs into{" "}
          <span className="text-blue-500 underline">seamless</span> code
          workflows.{" "}
        </h2>
        <p className="text-gray-500">
          Best used for all API&apos;s Zapier didn&apos;t integrate yet.
        </p>
      </div>
      <Button variant="outline" onClick={() => setSignup(true)}>
        Sign up for the Waitlist
      </Button>
    </div>
  );
}
