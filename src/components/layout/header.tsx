import { Cat } from "lucide-react";
import BrutalCard from "../ui/brutal-card";

export default function Header() {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-[2.5px]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-3">
          <BrutalCard className="p-1.5">
            <Cat className="size-5 text-white" />
          </BrutalCard>
          <span className="text-[15px] font-bold">KEONK STUDIO</span>
        </div>
        <nav>
          <ul className="flex items-center gap-5 text-sm">
            <li>Features()</li>
            <li>Maps()</li>
            <li>Team()</li>
            <li>Contact()</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
