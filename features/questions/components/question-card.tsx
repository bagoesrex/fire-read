import { Card, CardContent } from "@/components/ui/card";
import TagBadge from "@/components/ui/tag-badge";
import { Question } from "@/types/question";
import { Eye, ThumbsUp } from "lucide-react";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="group w-full rounded-xl py-0">
      <CardContent className="flex h-full flex-col p-0">
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <TagBadge key={tag} label={tag} className="bg-gray-200/80" />
            ))}
          </div>

          <div className="space-y-1.5">
            <h3 className="line-clamp-2 text-sm font-medium">{question.title}</h3>
            <p className="line-clamp-2 text-sm text-gray-600">{question.content}</p>
          </div>
        </div>

        <div className="mx-3 mt-auto flex items-center justify-between border-t border-gray-200 py-3">
          <p className="text-xs text-gray-500 italic">Discussion</p>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex items-center gap-1.5">
              <Eye className="h-3 w-3" />
              <span className="text-xs">{question.views}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ThumbsUp className="h-3 w-3" />
              <span className="text-xs">{question.upvotes}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
