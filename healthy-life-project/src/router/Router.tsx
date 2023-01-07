import { lazy } from "react"
// ** Router imports
import { useRoutes } from "react-router-dom"

import allRoutes from "./routes"

const Error = lazy(() => import("../views/pages/Error/Error"))

const Router = () => {
  const routes = useRoutes([...allRoutes, { path: "*", element: <Error /> }])

  return routes
}

export default Router
