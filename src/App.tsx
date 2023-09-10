import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Job from "components/z-page/signUp/Job";
import Agency from "components/z-page/signUp/Agency";
import License from "components/z-page/signUp/License";
import Account from "components/z-page/signUp/Account";
import Password from "components/z-page/signUp/Password";
import Guide from "components/z-page/signUp/Guide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Job />,
  },
  {
    path: "/agency",
    element: <Agency />,
  },
  {
    path: "/license",
    element: <License />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/guide",
    element: <Guide />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
