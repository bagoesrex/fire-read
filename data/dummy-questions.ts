import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: "question_001",
    title: "Apa perbedaan Clean Architecture dan MVC?",
    content: "Saya masih bingung kapan harus pakai Clean Architecture.",
    tags: ["Tech", "Life"],
    authorId: "user_002",
    createdAt: "2025-02-01T09:20:00Z",
    views: 230,
    upvotes: 34,
    answersCount: 5,
  },
  {
    id: "question_002",
    title: "Buku self development yang cocok untuk pemula?",
    content: "Rekomendasi buku ringan tapi impactful.",
    tags: ["Self Development"],
    authorId: "user_003",
    createdAt: "2025-02-03T13:10:00Z",
    views: 180,
    upvotes: 21,
    answersCount: 3,
  },
];
