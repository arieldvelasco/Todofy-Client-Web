import { useEffect, useState } from "react"
import { auth } from "../firebase"

import { ImCheckboxChecked } from "react-icons/im";

const Header = () => {

    const [user, setUser] = useState<import("firebase/auth").User | null>(null);
    const [userName, setUserName] = useState<string>("");

    const handleSignOut = () => {
        setUser(null);
        auth.signOut()
    }

    const getUserName = async () => {

        if (user) {
            const usermail = auth.currentUser!.email;

            if (usermail) {
                const mdbUser = await fetch(`http://localhost:3000/api/user/get/${usermail}`, {
                    method: "GET",
                })

                if (mdbUser.ok) {
                    const userData = await mdbUser.json();
                    if (userData.userName) {
                        return userData.userName;
                    }
                }

                const atIndex = usermail.indexOf("@");
                if (atIndex !== -1) {
                    return usermail.substring(0, atIndex);
                }
            }
        }

        return "Guest";
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((fbuser) => {
            setUser(fbuser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await getUserName();
            setUserName(name);
        }

        fetchUserName();
    }, [user]);

    return (
        <header className="h-20 w-full bg-cyan-800 text-cyan-100 flex flex-row justify-between items-center align-middle" >
            <span
                className="bg-cyan-100 text-cyan-700 flex flex-row gap-2 justify-center items-center align-middle text-2xl font-bold ml-4 px-4 rounded-l-md rounded-r-2xl "
            >
                <ImCheckboxChecked />
                Todofy
            </span>
            <span
                className="text-5xl text-cyan-50 font-semibold"
            >
                {userName}'s Todos
            </span>
            {

                user ? (
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 mr-4 rounded" onClick={handleSignOut}>
                        Sign Out
                    </button>
                ) : (
                    <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 mr-4 rounded" onClick={() => window.location.href = "/auth"}>
                        Sign In
                    </button>
                )
            }
        </header>
    )
}

export default Header