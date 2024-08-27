import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (
    <main className="flex flex-col space-y-12 items-center p-24 text-center h-screen">
      <div className="flex flex-row items-end">
        <ModeToggle />
      </div>
      <h1 className="text-4xl">2docs</h1>
      <p>
        Combine two or more API docs into seamless workflows. Best used for all
        API&apos;s Zapier didn&apos;t integrate yet.
      </p>
      <Button variant="outline">Sign up for the Waitlist</Button>
    </main>
  );
}
