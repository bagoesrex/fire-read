"use client";

import { useBooks } from "@/features/books/hooks/use-books";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BookCard from "@/features/books/components/book-card";

export default function RecommendationSection() {
  const { data: books } = useBooks();

  return (
    <section id="recommendation">
      <MaxWidthWrapper className="flex px-15 py-10">
        <div className="w-full space-y-5">
          <h2 className="text-2xl leading-tight">Recommended Books</h2>
          {books?.length === 0 ? (
            <p>No books available</p>
          ) : (
            <div className="grid grid-cols-5 gap-6">
              {books?.map((book) => (
                <BookCard key={book.author} book={book} />
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
