import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  label: string;
}

export default function CategoryCard({ label }: CategoryCardProps) {
  return (
    <Card className="group w-full rounded-xl py-0">
      <CardContent className="flex size-full items-center justify-center p-2 text-center">
        <span className="text-sm font-medium">{label}</span>
      </CardContent>
    </Card>
  );
}
