import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import Dashboard from "../../views/pages/Dashboard/Dashboard"

const DashboardRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]

export default DashboardRoutes
