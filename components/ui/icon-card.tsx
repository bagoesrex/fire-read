import { LucideIcon } from "lucide-react";
import { Card } from "./card";

interface IconCardProps {
  icon: LucideIcon;
}

export default function IconCard({ icon: Icon }: IconCardProps) {
  return (
    <Card className="size-fit rounded-[11.5px] bg-orange-400 p-2 shadow-none">
      <Icon className="h-4 w-4" color="white" />
    </Card>
  );
}
