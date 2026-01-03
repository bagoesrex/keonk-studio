import { Cat, Gamepad, Palette } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BrutalCard from "../ui/brutal-card";
import FeatureCard from "../ui/feature-card";

const featureItems = [
  {
    icon: Gamepad,
    label: "Game Library",
    description: "Access all our cat-themed maps in one place with intuitive navigation.",
  },
  {
    icon: Cat,
    label: "Cat Themed",
    description: "Every creation is inspired by adorable and charming feline characters.",
    iconClassName: "bg-chart-1",
  },
  {
    icon: Palette,
    label: "Creative Design",
    description: "Beautiful visuals with attention to every detail in our maps.",
    iconClassName: "bg-yellow-400",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="border-t-2 border-black">
      <MaxWidthWrapper className="space-y-10 py-15">
        <BrutalCard className="bg-chart-1 w-fit px-3 py-1">
          <h2 className="text-xl font-bold uppercase">Amazing Features</h2>
        </BrutalCard>
        <div className="grid grid-cols-3 gap-6">
          {featureItems.map((item) => (
            <FeatureCard
              icon={item.icon}
              label={item.label}
              description={item.description}
              iconClassName={item.iconClassName}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
