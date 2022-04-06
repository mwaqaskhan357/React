import React from "react"
import "./App.css"
import ComponentA from "./components/ComponentA"
import ErrorBoundary from "./components/error-boundary/ErrorBoundary"
import Parent from "./components/error-boundary/Parent"
import FocusComp from "./components/FocusComp"
import FRParent from "./components/FRParent"
import ParentComponent from "./components/ParentComponent"
import PortalParent from "./components/PortalParent"

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Parent parentName={true} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Parent parentName={false} />
      </ErrorBoundary>
      {/* <PortalParent /> */}
      {/* <ComponentA /> */}
      {/* <ParentComponent /> */}
      {/* <FocusComp /> */}
      {/* <FRParent /> */}
    </div>
  )
}

export default App
