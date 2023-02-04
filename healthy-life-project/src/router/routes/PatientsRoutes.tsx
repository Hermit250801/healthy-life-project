import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import Patients from "../../views/pages/Patients/Patients"

const PatientsRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/patients",
        element: <Patients />,
      },
    ],
  },
]

export default PatientsRoutes
