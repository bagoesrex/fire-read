import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../services/books.service";

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });
};
