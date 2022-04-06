import React, { Component } from "react"
import withCounter from "./withCounter"

class ClickCounter extends Component {
  render() {
    const { count, increament } = this.props
    return (
      <div>
        <button onClick={increament}>Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)
