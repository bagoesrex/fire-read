import { LoginPayload } from "../types/auth.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { mapFirebaseUser } from "../utils/utils";

export async function loginService(payload: LoginPayload) {
  const { email, password } = payload;

  const result = await signInWithEmailAndPassword(auth, email, password);

  return mapFirebaseUser(result.user);
}
