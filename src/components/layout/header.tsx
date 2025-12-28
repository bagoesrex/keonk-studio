import { Cat } from "lucide-react";
import BrutalCard from "../ui/brutal-card";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-2">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5">
        <div className="flex items-center gap-3">
          <BrutalCard className="p-1.5">
            <Cat className="size-5 text-white" />
          </BrutalCard>
          <span className="text-[15px] font-bold">KEONK STUDIO</span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          <p>Features</p>
          <p>Maps</p>
          <p>Team</p>
          <p>Contact</p>
        </nav>
        <div className="space-x-3">
          <Button className="bg-blue-300/80 text-xs font-semibold text-black" size={"sm"}>
            BROWSE MAP
          </Button>
          <Button className="text-xs font-semibold text-white" size={"sm"}>
            PLAY NOW
          </Button>
        </div>
      </div>
    </header>
  );
}
