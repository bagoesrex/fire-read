import { BookOpen } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";
import { questions } from "@/data/dummy-questions";
import QuestionCard from "@/features/questions/components/question-card";

export default function QuestionsWrapper() {
  return (
    <section id="questions">
      <MaxWidthWrapper className="flex flex-col px-8 pt-5 pb-18">
        <div className="flex w-full items-center justify-between border-b border-gray-400 pb-5">
          <div className="flex items-center gap-4">
            <IconCard icon={BookOpen} className="size-10 p-2.5" />
            <div>
              <h1 className="text-2xl font-semibold">Questions</h1>
              <p className="text-sm text-gray-600">Ask and answer reading-related questions</p>
            </div>
          </div>
          <div>
            <p className="rounded-sm border border-gray-500 bg-gray-300 py-0.5 pr-10 pl-2 text-gray-600">
              Todo Search
            </p>
          </div>
        </div>
        <div className="pt-5">
          {questions.length === 0 ? (
            <p>No questions available</p>
          ) : (
            <div className="grid-cols grid gap-6">
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
