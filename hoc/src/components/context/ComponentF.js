import React, { Component } from "react"
import { ContextConsumer } from "./UserContext"

export default class ComponentF extends Component {
  render() {
    return (
      <ContextConsumer>
        {(name) => {
          return <h1>Welcome {name}</h1>
        }}
      </ContextConsumer>
    )
  }
}
