import React from "react"

const FunctionClick = () => {
  function handleClick() {
    console.log("Function button clicked")
  }

  return (
    <div>
      <button onClick={handleClick}>Function Click</button>
    </div>
  )
}

export default FunctionClick
