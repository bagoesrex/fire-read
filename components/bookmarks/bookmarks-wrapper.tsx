import { Bookmark } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";

export default function BookmarksWrapper() {
  return (
    <section id="categories">
      <MaxWidthWrapper className="flex flex-col px-8 pt-5 pb-18">
        <div className="flex w-full items-center border-b border-gray-400 pb-5">
          <div className="flex items-center gap-4">
            <IconCard icon={Bookmark} className="size-10 p-2.5" />
            <div>
              <h1 className="text-2xl font-semibold">Bookmarks</h1>
              <p className="text-sm text-gray-600">Your saved books and questions</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>No bookmarks available</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
