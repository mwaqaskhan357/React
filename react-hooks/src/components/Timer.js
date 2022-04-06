import React, { useState, useEffect } from "react"

const Timer = () => {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      console.log("Counter Unmouting")
      clearInterval(interval)
    }
  }, [])
  return <div>Count - {count}</div>
}

export default Timer
