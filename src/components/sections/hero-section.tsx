import { PawPrint, Play } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="relative flex min-h-screen items-center justify-between pt-18">
        <div className="flex max-w-120 flex-col gap-6">
          <div className="inline-block">
            <span className="bg-foreground text-secondary-background px-4 py-2 text-xs font-bold tracking-wider uppercase">
              New Maps Available
            </span>
          </div>
          <h1 className="font-display text-5xl leading-[1.05] font-bold uppercase">
            Keonk
            <br />
            <span className="text-main/80">Studio</span>
          </h1>
          <p className="text-md text-foreground max-w-xl leading-relaxed">
            A passionate Roblox community creating amazing cat-themed maps. Explore magical worlds,
            cozy cafés, and epic adventures with adorable feline vibes!
          </p>
          <div className="space-x-3">
            <Button className="bg-main text-xs font-semibold text-white" size={"sm"}>
              <Play />
              <span>PLAY NOW</span>
            </Button>
            <Button
              className="bg-secondary-background text-foreground text-xs font-semibold"
              size={"sm"}
            >
              <PawPrint />
              <span>EXPLORE MAPS</span>
            </Button>
          </div>
          <div className="flex gap-6 text-xl font-bold uppercase">
            <p>
              10K+
              <br />
              <span className="text-[17px] font-light">Players</span>
            </p>
            <p>
              2+
              <br />
              <span className="text-[17px] font-light">Maps</span>
            </p>
            <p>
              10K+
              <br />
              <span className="text-[17px] font-light">Players</span>
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="" alt="" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
