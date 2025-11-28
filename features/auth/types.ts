export interface AuthUser {
    uid: string;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
}

export interface RegisterPayload {
    email: string;
    password: string;
    displayName?: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}