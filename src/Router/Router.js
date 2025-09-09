import { createBrowserRouter } from "react-router";
import Roots from "../Componets/Roots";
import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";
import SignIn from "../Componets/SignIn/SignIn";
import SignOut from "../Componets/SignOut/SignOut";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        children: [
            {
                index: true,
                Component: Home,
            },
            { path: "about", Component: About },
            { path: "/signin", Component: SignIn },
            { path: "/signout", Component: SignOut }
        ],
    },
]);
