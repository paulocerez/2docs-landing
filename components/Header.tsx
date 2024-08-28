import { ModeToggle } from "./ui/modeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full">
      {/* <Image
        src="/2docs.svg"
        alt="2Docs logo"
        width={36}
        height={36}
        className="rounded-md"
      /> */}
      <h1></h1>
      <ModeToggle />
    </div>
  );
}
