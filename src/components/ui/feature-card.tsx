import type { LucideIcon } from "lucide-react";
import BrutalCard from "./brutal-card";

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, label, description }: FeatureCardProps) {
  return (
    <BrutalCard className="bg-secondary-background space-y-5 px-6 py-4">
      <BrutalCard className="flex h-13 w-13 items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </BrutalCard>
      <div className="space-y-3">
        <h3 className="uppercase">{label}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </BrutalCard>
  );
}
