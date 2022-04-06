import React, { useState, useEffect } from "react"

const ObjectDependency = () => {
  const [state, setState] = useState({ name: "waqas", age: 23, skill: "React" })

  useEffect(() => {
    console.log("Updating")
  }, [state])
  return (
    <div>
      <button onClick={() => setState({ ...state, age: 24 })}>Click</button>
    </div>
  )
}

export default ObjectDependency
