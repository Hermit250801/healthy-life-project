import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import DocumentsPage from "../../views/pages/Documents/DocumentsPage"

const DocumentsRoutes = [
  {
    path: "/documents",
    element: <Layout />,
    children: [
      {
        path: "/documents",
        element: <DocumentsPage />,
      },
    ],
  },
]

export default DocumentsRoutes
