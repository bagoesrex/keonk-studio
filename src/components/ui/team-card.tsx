import BrutalCard from "./brutal-card";

interface TeamCardProps {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

export default function TeamCard({ name, role, initials, quote }: TeamCardProps) {
  return (
    <BrutalCard className="flex flex-col items-center justify-center gap-4 bg-white py-4">
      <BrutalCard className="flex h-13 w-13 items-center justify-center">
        <span className="font-bold text-white">{initials}</span>
      </BrutalCard>
      <div className="space-y-1 text-center">
        <h3 className="uppercase">{name}</h3>
        <p className="text-main mb-3 text-sm font-medium">{role}</p>
        <p className="text-sm text-gray-600 italic">"{quote}"</p>
      </div>
    </BrutalCard>
  );
}
