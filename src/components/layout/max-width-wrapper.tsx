import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4", className)}>{children}</div>;
}