import { useState } from "react";

interface LoginProps {
    signup: boolean;
    setSignup: (signup: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setSignup, signup }) => {

    const [userMail, setUserMail] = useState("");
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
                Log In
            </header>

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
                    className="border-2 border-cyan-700 rounded-md p-2 w-full"
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
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
                    Dont have an account?
                </span>
                <button
                    onClick={
                        () => setSignup(!signup)
                    }
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                >
                    Register
                </button>
            </footer>
        </form>
    )
}

export default Login