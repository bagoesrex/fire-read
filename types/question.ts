export type QuestionTag = "Tech" | "School" | "Career" | "Life" | "Self Development";

export interface Question {
  id: string;
  title: string;
  content: string;
  tags: QuestionTag[];
  authorId: string;
  createdAt: string;
  views: number;
  upvotes: number;
  answersCount: number;
}
