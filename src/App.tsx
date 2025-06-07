import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import AuthPage from "./pages/Auth.page";
import TodoPage from "./pages/Todo.page";
import Error404 from "./pages/Error404.page";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoPage />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

const App = () => {
    return (
        <div className="bg-cyan-200 w-dvw h-dvh flex flex-col justify-center items-center align-middle" >
            <Header />
            <div className="container flex flex-col flex-1 justify-center items-center align-middle">
                <RouterProvider router={router} />
            </div>
            <Footer />
        </div>
    )
}

export default App

/*
implementar user management con firebase auth
implementar todo list con local storage si no esta logueado y con la API si esta logueado
implementar un sistema de notificaciones con toastify
implementar un sistema de temas con tailwindcss
implementar un sistema de rutas con react-router-dom
implementar un sistema de estado global con zustand
*/