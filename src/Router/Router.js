import { createBrowserRouter } from "react-router";
import Roots from "../Componets/Roots";
import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";

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
    ],
  },
]);
