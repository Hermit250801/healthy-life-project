import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import Doctors from "../../views/pages/Doctors/Doctocs"

const DoctorsRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/doctors",
        element: <Doctors />,
      },
    ],
  },
]

export default DoctorsRoutes
