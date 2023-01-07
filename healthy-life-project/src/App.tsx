import React, { Suspense } from "react"
import Router from "./router/Router.js"

function App() {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
