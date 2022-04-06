import React, { Component } from "react"

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increament() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log("updated value " + this.state.count)
    )
    console.log(this.state.count)
  }

  increamentFive() {
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <div>Count-- {count} </div>
        <br />
        <button onClick={() => this.increamentFive()}>Increament</button>
      </div>
    )
  }
}
