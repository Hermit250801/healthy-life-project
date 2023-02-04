import { lazy } from "react"
// ** Router imports
import { useRoutes } from "react-router-dom"

import allRoutes from "./routes"
import Login from "../views/pages/authentication/Login"
import Register from "../views/pages/authentication/Register"
import NotAuthorized from "../views/pages/authentication/NotAuthorized"
import Layout from "../components/layout/Layout"

const Error = lazy(() => import("../views/pages/Error/Error"))
// ** Default Route
const DefaultRoute = "/dashboard"

const Router = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/auth/not-auth",
      element: <NotAuthorized />,
    },
    {
      path: "/",
      element: <Layout />,
    },
    ...allRoutes,
    { path: "*", element: <Error /> },
  ])

  return routes
}

export default Router
