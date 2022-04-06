import React, { Component } from "react"

export default class UserGreating extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogedIn: false,
    }
  }

  render() {
    return this.state.isLogedIn ? (
      <div>Welcome Waqas</div>
    ) : (
      <div>Welcome Guest</div>
    )

    //   return (<div>
    //     <div>{this.state.isLogedIn ? "Welcome Waqas" : "Welcome Guest"}</div>
    // </div>)
  }
}
