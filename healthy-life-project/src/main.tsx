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

const LazyApp = lazy(() => import("./App"))
/* eslint-disable @typescript-eslint/ban-ts-comment */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleAuthContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyApp />
            <Toaster position={"top-right"} toastOptions={{ className: "react-hot-toast" }} />
          </Suspense>
        </Provider>
      </BrowserRouter>
    </GoogleAuthContextProvider>
  </React.StrictMode>,
)
