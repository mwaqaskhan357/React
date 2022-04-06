import React from "react"

export default function StyleComponent() {
  const heading = {
    color: "blue",
    fontSize: "72px",
  }
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">Error</h1>
      <h1 className="success">Success</h1>
    </div>
  )
}
