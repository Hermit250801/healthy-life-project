import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import SicksPage from "../../views/pages/Sicks/SicksPage"

const SicksRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/sicks",
        element: <SicksPage />,
      },
    ],
  },
]

export default SicksRoutes
