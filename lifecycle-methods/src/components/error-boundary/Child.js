import React from "react"

function Child({ name }) {
  if (name === "Joker") {
    throw new Error("Not hero")
  }
  return <div>{name}</div>
}

export default Child
