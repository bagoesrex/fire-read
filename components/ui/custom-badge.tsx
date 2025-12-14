import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "./badge";

interface CustomBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export default function CustomBadge({ icon: Icon, label, className }: CustomBadgeProps) {
  return (
    <Badge
      className={cn(
        "flex size-fit items-center justify-center gap-2 rounded-full border border-orange-400 bg-orange-400/30 px-2 py-1",
        className,
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Badge>
  );
}
