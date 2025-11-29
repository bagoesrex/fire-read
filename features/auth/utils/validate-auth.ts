import z from "zod";

export const registerFormSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password must be at most 100 characters long." }),
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name must be at most 100 characters long." }),
});

export const loginFormSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password must be at most 100 characters long." }),
});
