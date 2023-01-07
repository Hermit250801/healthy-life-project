import { useRoutes } from "react-router-dom"
import { lazy } from "react"

const Login = lazy(() => import("../../views/pages/authentication/Login"))
const Register = lazy(() => import("../../views/pages/authentication/Register"))
const NotAuthorized = lazy(() => import("../../views/pages/authentication/NotAuthorized"))

const AuthenicateRoutes = [
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
]

export default AuthenicateRoutes
