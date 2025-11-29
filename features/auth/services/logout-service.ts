import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function logoutService() {
  await signOut(auth);

  return { success: true };
}
