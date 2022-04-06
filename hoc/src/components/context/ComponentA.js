import React, { Component } from "react"
import ComponentB from "./ComponentB"
import { ContextProvider } from "./UserContext"

export default class ComponentA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Waqas",
    }
  }

  render() {
    return (
      <div>
        <ContextProvider value={this.state.name}>
          <ComponentB />
        </ContextProvider>
      </div>
    )
  }
}
