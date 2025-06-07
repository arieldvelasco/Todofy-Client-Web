import { useState } from "react"

import Login from "../components/Login"
import Signup from "../components/Signup"

const AuthPage = () => {

    const [signup, setSignup] = useState(false)

    return (
        <main>
            {
                signup ? (
                    <Signup setSignup={setSignup} signup={signup} />
                ) : (
                    <Login setSignup={setSignup} signup={signup} />
                )
            }
        </main>
    )
}

export default AuthPage