export interface AuthUser {
  uid: string;
  email: string | null;
  username: string | null;
  photoURL?: string | null;
}

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
