import DashboardRoutes from "./DashboardRoutes"
import DevicesRoutes from "./DevicesRoutes"
import DocumentsRoutes from "./DocumentsRoutes"
import DoctorsRoutes from "./DoctorsRoutes"
import HospitalsRoutes from "./HospitalsRoutes"
import PatientsRoutes from "./PatientsRoutes"
import RulesRoutes from "./RulesRoutes"
import SicksRoutes from "./SicksRoutes"

export default [
  ...DashboardRoutes,
  ...DevicesRoutes,
  ...DocumentsRoutes,
  ...DoctorsRoutes,
  ...HospitalsRoutes,
  ...PatientsRoutes,
  ...RulesRoutes,
  ...SicksRoutes,
]
