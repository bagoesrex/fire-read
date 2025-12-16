import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "book_001",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    coverUrl: "/book-placeholder.webp",
    description: "Panduan membangun kebiasaan kecil yang berdampak besar.",
    publishedAt: "2018-10-16",
    createdAt: "2025-01-10T08:30:00Z",
    views: 1245,
    bookmarks: 320,
    rating: 4.8,
  },
  {
    id: "book_002",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Technology",
    coverUrl: "/book-placeholder.webp",
    description: "Prinsip menulis kode yang bersih dan mudah dipelihara.",
    publishedAt: "2008-08-01",
    createdAt: "2025-01-12T10:00:00Z",
    views: 980,
    bookmarks: 410,
    rating: 4.7,
  },
];
