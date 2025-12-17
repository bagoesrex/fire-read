import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface TagBadgeProps {
  label: string;
  className?: string;
}

export default function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <Badge className={cn("rounded-md bg-white/80 px-1.5 py-0.5 text-xs text-black", className)}>
      {label}
    </Badge>
  );
}
