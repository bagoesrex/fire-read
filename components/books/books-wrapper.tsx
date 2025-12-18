import { BookOpen } from "lucide-react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import IconCard from "../ui/icon-card";
import { books } from "@/data/dummy-books";
import BookCard from "@/features/books/components/book-card";

export default function BooksWrapper() {
  return (
    <section id="books">
      <MaxWidthWrapper className="flex flex-col px-8 pt-5 pb-18">
        <div className="flex w-full items-center justify-between border-b border-gray-400 pb-5">
          <div className="flex items-center gap-4">
            <IconCard icon={BookOpen} className="size-10 p-2.5" />
            <div>
              <h1 className="text-2xl font-semibold">Books</h1>
              <p className="text-sm text-gray-600">Explore our collection of 50+ books</p>
            </div>
          </div>
          <div>
            <p className="rounded-sm border border-gray-500 bg-gray-300 py-0.5 pr-10 pl-2 text-gray-600">
              Todo Search
            </p>
          </div>
        </div>
        <div className="pt-5">
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
