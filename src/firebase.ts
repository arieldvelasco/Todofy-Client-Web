import app from "./config/firebase";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();