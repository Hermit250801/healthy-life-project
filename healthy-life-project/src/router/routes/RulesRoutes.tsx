import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import RulesPage from "../../views/pages/Rules/RulesPage"

const RulesRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/rules",
        element: <RulesPage />,
      },
    ],
  },
]

export default RulesRoutes
