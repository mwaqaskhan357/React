import React from "react"

const Hello = () => {
  // return (
  //   <div className="dumy">
  //     <h1>Hello Waqas</h1>
  //   </div>
  // )

  return React.createElement(
    "div",
    { className: "dumy" },
    React.createElement("h1", null, "Hello Waqas")
  )
}

export default Hello
