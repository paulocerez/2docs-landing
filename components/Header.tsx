import { ModeToggle } from "./ui/modeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <div className="hidden md:flex flex-row justify-between w-full">
      <ModeToggle />
    </div>
  );
}
