import { collection, getDocs } from "firebase/firestore";
import { Book } from "../types/book.types";
import { db } from "@/lib/firebase";

const booksRef = collection(db, "books");

export const getBooks = async (): Promise<Book[]> => {
  const snapshot = await getDocs(booksRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Book[];
};
