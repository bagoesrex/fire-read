import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Book } from "@/types/book";
import { Bookmark, Eye, Star } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group relative w-full overflow-hidden rounded-xl p-0">
      <div className="relative aspect-3/4 w-full">
        <Image
          src="/book-placeholder.webp"
          alt={book.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute z-10 flex size-full flex-col justify-between p-3">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-md bg-white/80 px-1.5 py-0.5 text-xs">{book.category}</span>
            <div className="rounded-md bg-orange-400 p-1.5">
              <Bookmark className="fill-white text-white" size={17} />
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="line-clamp-2 text-lg font-semibold text-white">{book.title}</h3>
              <p className="text-sm text-white/80">{book.author}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-orange-400 stroke-orange-400" />
                <span className="text-sm text-white/80">{book.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/80">{book.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
