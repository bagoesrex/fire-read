import { ChevronRight, MessageCircle } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";
import Link from "next/link";
import { dummyCategories } from "@/data/dummy-categories";
import CategoryCard from "@/features/categories/components/category-card";

export default function BrowseCategoriesSection() {
  const categories = [...dummyCategories.books, ...dummyCategories.questions];

  return (
    <section id="trending-questions">
      <MaxWidthWrapper className="flex px-15 pb-10">
        <div className="w-full space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <IconCard icon={MessageCircle} />
              <h2 className="text-2xl leading-tight font-medium">Browse Categories</h2>
            </div>
            <Link
              href="/categories"
              className="group flex items-center gap-1.5 text-sm transition-colors"
            >
              <span className="transition-colors group-hover:text-orange-400">View all</span>

              <ChevronRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:text-orange-400"
              />
            </Link>
          </div>
          {categories.length === 0 ? (
            <p>No categories available</p>
          ) : (
            <div className="grid grid-cols-8 gap-3">
              {categories.slice(0, 8).map((category) => (
                <CategoryCard key={category} label={category} />
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
