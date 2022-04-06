import React, { Component } from "react"

export default class ClassClick extends Component {
  handleClick() {
    console.log("Class button clicked")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Class Click</button>
      </div>
    )
  }
}
