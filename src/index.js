import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import navbar from "./navbar.jsx";
import Home from "./home.jsx";
import ErrorPage from "./error.page.jsx";
import Kitchen from "./kitchen.jsx";
import LivingRoom from "./livingRoom.jsx"
import Room from "./room.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/kitchen",
    element: <Kitchen/>
  },
  {
    path: "/livingRoom",
    element: <LivingRoom/>,
  },
  {
    path: "/room/:id",
    element: <Room/>,
  },
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
]);

import App from "./App";
import NavBar from "./navbar.jsx";
import errorPage1 from "./error.page.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <NavBar/>
    <RouterProvider router={router} />
  </StrictMode>
);
