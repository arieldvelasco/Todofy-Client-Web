import { useState } from "react";

interface SignupProps {
    signup: boolean;
    setSignup: (signup: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setSignup, signup }) => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    return (
        <form
            className="flex flex-col items-center justify-center bg-cyan-100 rounded-xl border-2 border-cyan-700 shadow-md shadow-cyan-950"
            onSubmit={(e) => {
                e.preventDefault();
                // Handle signup logic here
            }}
        >
            <header
                className="bg-cyan-700 w-100 text-white rounded-t-md text-center p-2 mb-5 text-2xl font-bold"
            >
                Sign Up
            </header>

            <section
                className="flex flex-col items-start justify-center w-full px-5 mb-5"
            >
                <label
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                    htmlFor="txt-userName"
                >
                    User name:
                </label>
                <input
                    type="text"
                    name=""
                    id="txt-userName"
                    placeholder="Enter your user name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border-2 border-cyan-700 rounded-md p-2 w-full"
                />
            </section>

            <section
                className="flex flex-col items-start justify-center w-full px-5 mb-5"
            >
                <label
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                    htmlFor="txt-userEmail"
                >
                    Email:
                </label>
                <input
                    type="email"
                    name=""
                    id="txt-userEmail"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="border-2 border-cyan-700 rounded-md p-2 w-full"
                />
            </section>

            <section
                className="flex flex-col items-start justify-center w-full px-5 mb-5"
            >
                <label
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                    htmlFor="txt-userPass"
                >
                    Password:
                </label>
                <input
                    type="password"
                    name=""
                    id="txt-userPass"
                    placeholder="Enter your password"
                    value={userPass}
                    onChange={(e) => setUserPass(e.target.value)}
                    className="border-2 border-cyan-700 rounded-md p-2 w-full"
                />
            </section>

            <footer
                className="flex flex-row gap-2 items-center justify-center w-full px-5 mb-5"
            >
                <span>
                    Already have an account?
                </span>
                <button
                    onClick={
                        () => setSignup(!signup)
                    }
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                >
                    Log In
                </button>
            </footer>
        </form>
    )
}

export default Signup