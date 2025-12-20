import { Tag } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";

export default function CategoriesWrapper() {
  return (
    <section id="categories">
      <MaxWidthWrapper className="flex flex-col px-8 pt-5 pb-18">
        <div className="flex w-full items-center border-b border-gray-400 pb-5">
          <div className="flex items-center gap-4">
            <IconCard icon={Tag} className="size-10 p-2.5" />
            <div>
              <h1 className="text-2xl font-semibold">Categories</h1>
              <p className="text-sm text-gray-600">Browse books and questions by category</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>No categories available</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
