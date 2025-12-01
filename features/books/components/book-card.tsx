import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Book } from "../types/book.types";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group relative w-full overflow-hidden rounded-sm p-0">
      <div className="relative h-72 w-full">
        <Image
          src={"/book-placeholder.webp"}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="line-clamp-2 text-lg font-semibold">{book.title}</h3>
          <p className="text-sm opacity-80">by {book.author}</p>

          <p className="mt-2 line-clamp-3 text-xs text-white/90">{book.description}</p>

          <Button
            type="button"
            className="mt-3 w-fit rounded bg-white/90 px-2 py-0 text-xs font-medium text-black hover:bg-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </Card>
  );
}
