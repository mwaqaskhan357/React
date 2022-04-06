import React, { useState, useEffect } from "react"
import MousePosition from "./MousePosition"

const Counter = () => {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      {display && <MousePosition />}
      <button onClick={() => setDisplay(!display)}>Remove Component</button>
    </div>
  )
}

export default Counter
