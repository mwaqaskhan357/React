import React, { Component } from "react"

class ClickCounter2 extends Component {
  render() {
    const { count, increament } = this.props
    return (
      <div>
        <button onClick={increament}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounter2
