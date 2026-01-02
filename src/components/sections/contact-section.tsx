import { Cat, MessageCircle } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalCard from "../ui/brutal-card";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t-2 border-black">
      <MaxWidthWrapper className="flex items-center justify-center space-y-10 py-15">
        <BrutalCard className="bg-secondary-background flex w-full max-w-xl flex-col items-center justify-center gap-1.5 p-5 text-center">
          <Cat size={45} fill="orange" />
          <h2 className="text-xl font-bold uppercase">
            Ready To <span className="text-main">Play</span>?
          </h2>
          <p className="max-w-md text-sm font-light text-gray-600">
            Join thousands of players exploring amazing cat worlds! Follow us for the latest map
            updates and exciting events.
          </p>
          <div className="mt-3 space-x-3.5">
            <Button className="bg-main text-xs font-semibold text-white" size={"sm"}>
              <Cat />
              <span>PLAY ON ROBLOX</span>
            </Button>
            <Button className="bg-blue-300/80 text-xs font-semibold text-black" size={"sm"}>
              <MessageCircle />
              <span>JOIN DISCORD</span>
            </Button>
          </div>
        </BrutalCard>
      </MaxWidthWrapper>
    </section>
  );
}
