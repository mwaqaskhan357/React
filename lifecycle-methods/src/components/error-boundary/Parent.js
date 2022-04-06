import React from "react"
import Child from "./Child"
import ErrorBoundary from "./ErrorBoundary"

function Parent({ parentName }) {
  if (!parentName) {
    throw new Error("Without name")
  }
  return (
    <>
      <ErrorBoundary>
        <Child name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child name="Joker" />
      </ErrorBoundary>
    </>
  )
}

export default Parent
