import { Cat, PawPrint, Play } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import heroCat from "@/assets/hero-cat.jpg";
import BrutalCard from "../ui/brutal-card";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="relative flex min-h-screen items-center justify-between gap-5 pt-18">
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
          <BrutalCard>
            <img
              src={heroCat}
              alt="Keonk Studio Mascot"
              className="h-auto w-full max-w-md object-cover"
            />
          </BrutalCard>

          <BrutalCard className="brutal-card absolute -bottom-4 -left-4 bg-red-500 p-4">
            <div className="flex items-center gap-3">
              <BrutalCard className="flex h-10 w-10 items-center justify-center">
                <Cat className="h-5 w-5 text-white" />
              </BrutalCard>
              <div>
                <p className="font-display text-sm font-bold uppercase">Meow World</p>
                <p className="text-muted-foreground text-xs">Latest Map 2025</p>
              </div>
            </div>
          </BrutalCard>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
