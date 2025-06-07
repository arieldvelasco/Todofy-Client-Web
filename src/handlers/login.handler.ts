import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { saveToLocalStorage } from "../services/localStorade";

export const handleLongin = async (userEmail: string, userPass: string) => {
    if (!userEmail || !userPass) {
        return { status: "error", message: "Please fill in all fields." };
    }

    try {
        await signInWithEmailAndPassword(auth, userEmail, userPass);

        console.log("User signed up successfully:");

        saveToLocalStorage("userEmail", userEmail);

        return { status: "success", message: "Signup successful!" };
    } catch (error) {
        console.error("Signup failed:", error);
        return { status: "error", message: "Signup failed. Please try again." };
    }
}