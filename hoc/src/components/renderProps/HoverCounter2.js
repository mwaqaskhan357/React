import React, { Component } from "react"

class HoverCounter2 extends Component {
  render() {
    const { count, increament } = this.props
    return (
      <div>
        <h1 onMouseOver={increament}>Hover {count} times</h1>
      </div>
    )
  }
}

export default HoverCounter2
