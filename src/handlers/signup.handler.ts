import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { saveToLocalStorage } from "../services/localStorade";

export const handleSignup = async (userName: string, userEmail: string, userPass: string) => {
    if (!userName || !userEmail || !userPass) {
        return { status: "error", message: "Please fill in all fields." };
    }

    try {
        await createUserWithEmailAndPassword(auth, userEmail, userPass)

        console.log("User signed up successfully:");

        //await fetch(`${import.meta.env.VITE_API_URL}/api/user/create/`, {
        await fetch(`http://localhost:3000/api/user/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: userName,
                email: userEmail,
            }),
        });

        saveToLocalStorage("userEmail", userEmail);

        return { status: "success", message: "Signup successful!" };
    } catch (error) {
        console.error("Signup failed:", error);
        return { status: "error", message: "Signup failed. Please try again." };
    }
}