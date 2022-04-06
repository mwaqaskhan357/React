import React, { useEffect, useState } from "react"

const MousePosition = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mousePosition = (e) => {
    console.log("Mouse Event")
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    window.addEventListener("mousemove", mousePosition)

    return () => {
      console.log("Unmounting MousePosition component")
      window.removeEventListener("mousemove", mousePosition)
    }
  }, [])

  return <div>{`X - ${x}    Y - ${y}`}</div>
}

export default MousePosition
