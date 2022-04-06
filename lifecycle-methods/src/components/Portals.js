import React from "react"
import ReactDOM from "react-dom"

export default function Portals() {
  return ReactDOM.createPortal(
    <h1>Portals example</h1>,
    document.getElementById("portal-demo")
  )
}
