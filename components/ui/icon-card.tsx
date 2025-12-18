import { LucideIcon } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  className?: string;
}

export default function IconCard({ icon: Icon, className }: IconCardProps) {
  return (
    <Card className={cn(`size-9 rounded-[11.5px] bg-orange-400 p-2 shadow-none`, className)}>
      <Icon className="size-full" color="white" />
    </Card>
  );
}
