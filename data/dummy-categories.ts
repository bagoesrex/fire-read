import { Categories } from "@/types/categories";
import { BookCategory } from "@/types/book";
import { QuestionTag } from "@/types/question";

export const dummyCategories: Categories = {
  books: ["Science", "Novel", "Self Development", "Technology", "History"] as BookCategory[],

  questions: ["Tech", "School", "Career", "Life", "Self Development"] as QuestionTag[],
};
