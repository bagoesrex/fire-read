import { RegisterPayload } from "../types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { mapFirebaseUser } from "../utils";

export async function registerService(payload: RegisterPayload) {
  const { email, password } = payload;

  const result = await createUserWithEmailAndPassword(auth, email, password);

  return mapFirebaseUser(result.user);
}
