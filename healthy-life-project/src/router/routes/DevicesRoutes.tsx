import { lazy } from "react"
import Layout from "../../components/layout/Layout"
import DevicesPage from "../../views/pages/Devices/DevicesPage"

const DevicesRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/devices",
        element: <DevicesPage />,
      },
    ],
  },
]

export default DevicesRoutes
