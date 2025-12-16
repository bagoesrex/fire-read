export type BookCategory = "Science" | "Novel" | "Self Development" | "Technology" | "History";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  coverUrl: string;
  description: string;
  publishedAt: string;
  createdAt: string;
  views: number;
  bookmarks: number;
  rating: number;
}
