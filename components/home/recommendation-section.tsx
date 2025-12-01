"use client";

import { useBooks } from "@/features/books/hooks/use-books";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import BookCard from "@/features/books/components/book-card";

export default function RecommendationSection() {
  const { data: books } = useBooks();

  return (
    <section id="recommendation">
      <MaxWidthWrapper className="flex px-15 py-18">
        <div className="w-full space-y-8">
          <h2 className="text-3xl leading-tight font-light">Recommended Books</h2>
          {books?.length === 0 ? (
            <p>No books available</p>
          ) : (
            <div className="grid grid-cols-4 gap-6">
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
