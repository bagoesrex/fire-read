import { Timestamp } from "firebase/firestore";

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  createdAt: Timestamp;
};
