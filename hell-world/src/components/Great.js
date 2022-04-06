import React from "react"

export const Great = ({ name, heroName, children }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  )
}
