import React, { Component } from "react"
import withCounter from "./withCounter"

class HoverCounter extends Component {
  render() {
    const { count, increament } = this.props
    return (
      <div>
        <h1 onMouseOver={increament}>Hover {count} times</h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
