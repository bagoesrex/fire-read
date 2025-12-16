import { BookCategory } from "./book";
import { QuestionTag } from "./question";

export interface Categories {
  books: BookCategory[];
  questions: QuestionTag[];
}
