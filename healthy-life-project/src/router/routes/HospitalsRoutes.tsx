import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import HospitalsPage from "../../views/pages/Hospitals/HospitalsPage"

const HospitalsRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/hospitals",
        element: <HospitalsPage />,
      },
    ],
  },
]

export default HospitalsRoutes
