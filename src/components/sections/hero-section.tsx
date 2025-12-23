import { PawPrint, Play } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="relative flex pt-18 min-h-screen justify-between items-center">
        <div className="flex flex-col gap-6 max-w-120">
          <div className="inline-block">
            <span className="px-4 py-2 bg-foreground text-secondary-background font-bold uppercase text-xs tracking-wider">
              New Maps Available
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold uppercase leading-[1.05]">
            Keonk
            <br />
            <span className="text-main/80">Studio</span>
          </h1>
          <p className="text-md text-foreground max-w-xl leading-relaxed">
            A passionate Roblox community creating amazing cat-themed maps.
            Explore magical worlds, cozy cafés, and epic adventures with adorable feline vibes!
          </p>
          <div className="space-x-3">
            <Button className="bg-main text-xs font-semibold text-white" size={"sm"}>
              <Play />
              <span>PLAY NOW</span>
            </Button>
            <Button className="text-xs bg-secondary-background font-semibold text-foreground" size={"sm"}>
              <PawPrint />
              <span>EXPLORE MAPS</span>
            </Button>
          </div>
          <div className="flex gap-6 uppercase font-bold text-xl" >
            <p>
              10K+
              <br />
              <span className="font-light text-[17px]">
                Players
              </span>
            </p>
            <p >
              2+
              <br />
              <span className="font-light text-[17px]">
                Maps
              </span>
            </p>
            <p >
              10K+
              <br />
              <span className="font-light text-[17px]">
                Players
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="" alt="" />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}