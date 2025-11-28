import { User } from "firebase/auth";
import { AuthUser } from "./types";

export function mapFirebaseUser(user: User | null): AuthUser | null {
    if (!user) return null;

    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
    }
}