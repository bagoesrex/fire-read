import { RegisterPayload } from "../types/auth.types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { mapFirebaseUser } from "../utils/utils";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function registerService(payload: RegisterPayload) {
  const { email, password, username } = payload;

  const result = await createUserWithEmailAndPassword(auth, email, password);

  const userRef = doc(db, "users", result.user.uid);

  await setDoc(userRef, {
    uid: result.user.uid,
    email: result.user.email,
    username: username,
    photoURL: result.user.photoURL,
    role: "user",
    createdAt: serverTimestamp(),
  });

  return mapFirebaseUser(result.user);
}
