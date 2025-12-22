import { cn } from "@/lib/utils";

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrutalCard({ children, className }: BrutalCardProps) {
  return (
    <div
      className={cn(
        "bg-primary border-2 border-black",
        "shadow-[3px_3px_0_#000]",
        "hover:shadow-[3px_3px_0_#000]",
        className,
      )}
    >
      {children}
    </div>
  );
}
