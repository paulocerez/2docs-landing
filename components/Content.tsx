import { Button } from "./ui/button";

export default function Content() {
  return (
    <div className="flex flex-col space-y-16 items-center text-center">
      <div className="flex flex-col space-y-4 animate-slide-in-bottom">
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
      <Button variant="outline">Sign up for the Waitlist</Button>
    </div>
  );
}
