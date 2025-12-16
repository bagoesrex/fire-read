"use client";

import { useBooks } from "@/features/books/hooks/use-books";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BookCard from "@/features/books/components/book-card";
import IconCard from "../ui/icon-card";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/dummy-books";

export default function RecentBooksSection() {
  // const { data: books } = useBooks();

  return (
    <section id="recent-books">
      <MaxWidthWrapper className="flex px-15 py-10">
        <div className="w-full space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <IconCard icon={BookOpen} />
              <h2 className="text-2xl leading-tight font-medium">Recent Books</h2>
            </div>
            <Link
              href="/books"
              className="group flex items-center gap-1.5 text-sm transition-colors"
            >
              <span className="transition-colors group-hover:text-orange-400">View all</span>

              <ChevronRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:text-orange-400"
              />
            </Link>
          </div>
          {books.length === 0 ? (
            <p>No books available</p>
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {books.map((book) => (
                <BookCard key={book.author} book={book} />
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
