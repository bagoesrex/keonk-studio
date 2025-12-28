import { Cat } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <MaxWidthWrapper className="flex justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="bg-main border-2 border-white p-1.5">
            <Cat className="size-5 text-white" />
          </div>
          <span className="text-[15px] font-bold text-white">KEONK STUDIO</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-white">© 2025 Keonk Studio.</span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
