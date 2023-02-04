import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { Suspense, lazy } from "react"
import store from "./redux/store"

//Import Scss
import "./assets/scss/index.scss"
import "bootstrap/dist/css/bootstrap.css"
import "react-datepicker/dist/react-datepicker.css"

// ** Toast
import { Toaster } from "react-hot-toast"

import { GoogleAuthContextProvider } from "./utils/context/GoogleAuthContext"

import Spinner from "./components/Spinner/LoadingSpinner"
import { ProSidebarProvider } from "react-pro-sidebar"

const LazyApp = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleAuthContextProvider>
      <ProSidebarProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Suspense fallback={<Spinner />}>
              <LazyApp />
              <Toaster position={"top-right"} toastOptions={{ className: "react-hot-toast" }} />
            </Suspense>
          </Provider>
        </BrowserRouter>
      </ProSidebarProvider>
    </GoogleAuthContextProvider>
  </React.StrictMode>,
)
