import React from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./home";
import Apout from "./Aport";
import Layout from "./Layout";
import START_FRAMEWORK from "./START_FRAMEWORK";
import Contact from "./Contact";
import Notfound from "./Notfound";
export default function App() {
  let Routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "START_FRAMEWORK", element: <START_FRAMEWORK /> },
        { path: "about", element: <Apout /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={Routes} />;
}
