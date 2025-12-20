import { Trophy } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";

export default function LeaderboardWrapper() {
  return (
    <section id="leaderboard">
      <MaxWidthWrapper className="flex flex-col px-8 pt-5 pb-18">
        <div className="flex w-full items-center border-b border-gray-400 pb-5">
          <div className="flex items-center gap-4">
            <IconCard icon={Trophy} className="size-10 p-2.5" />
            <div>
              <h1 className="text-2xl font-semibold">Leaderboard</h1>
              <p className="text-sm text-gray-600">Top readers and contributors</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>No leaderboard available</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
