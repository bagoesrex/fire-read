import { ChevronRight, TrendingUp } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";
import Link from "next/link";
import { questions } from "@/data/dummy-questions";
import QuestionCard from "@/features/questions/components/question-card";

export default function TrendingQuestionsSection() {
  return (
    <section id="trending-questions">
      <MaxWidthWrapper className="flex px-15 pb-10">
        <div className="w-full space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <IconCard icon={TrendingUp} />
              <h2 className="text-2xl leading-tight font-medium">Trending Questions</h2>
            </div>
            <Link
              href="/questions"
              className="group flex items-center gap-1.5 text-sm transition-colors"
            >
              <span className="transition-colors group-hover:text-orange-400">View all</span>

              <ChevronRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:text-orange-400"
              />
            </Link>
          </div>
          {questions.length === 0 ? (
            <p>No questions available</p>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
