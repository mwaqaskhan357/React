import React from "react"

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greatHandler("Child")}>Great Parent</button>
    </div>
  )
}
