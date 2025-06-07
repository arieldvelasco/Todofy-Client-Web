import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { handleLongin } from '../handlers/login.handler';

interface LoginProps {
    signup: boolean;
    setSignup: (signup: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setSignup, signup }) => {

    const [userMail, setUserMail] = useState("");
    const [userPass, setUserPass] = useState("");

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await handleLongin(userMail, userPass);

        if (result.status === "error") {
            toast.error(result.message);
        }
        else if (result.status === "success") {
            toast.success(result.message);
            setUserMail("");
            setUserPass("");
            window.location.href = "/";
        }
    }

    return (
        <form
            className="flex flex-col items-center justify-center bg-cyan-50 rounded-xl border-2 border-cyan-700 shadow-md shadow-cyan-950"
            onSubmit={loginHandler}
        >
            <header
                className="bg-cyan-700 w-full text-white rounded-t-md text-center p-2 mb-5 text-2xl font-bold"
            >
                Login
            </header>

            <main
                className="flex flex-col items-center justify-center w-full px-5 mb-5"
            >

                <section
                    className="flex flex-col items-start justify-center w-full mb-5"
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
                        value={userMail}
                        onChange={(e) => setUserMail(e.target.value)}
                        className="border-2 border-cyan-700 bg-white rounded-md p-2 w-full"
                    />
                </section>

                <section
                    className="flex flex-col items-start justify-center w-full mb-5"
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
                        className="border-2 border-cyan-700 bg-white rounded-md p-2 w-full"
                    />
                </section>

                <button
                    type="submit"
                    className="bg-cyan-700 text-white rounded-md p-2 mx-5 w-full mb-5 hover:bg-cyan-800 transition-colors duration-300 font-bold cursor-pointer "
                >
                    Sign Up
                </button>
            </main>

            <footer
                className="flex flex-row gap-2 items-center justify-center w-full px-5 mb-5"
            >
                <span>
                    Dont have an account?
                </span>
                <button
                    type="button"
                    onClick={
                        () => setSignup(!signup)
                    }
                    className="text-cyan-700 hover:text-cyan-900 font-bold cursor-pointer"
                >
                    Log In
                </button>
                <span>Powered by Firebase</span>
            </footer>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </form>
    );
}

export default Login