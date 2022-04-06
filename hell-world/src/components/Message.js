import React, { Component } from "react"

export default class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: "Welcome visitor",
    }
  }

  channelMessage() {
    this.setState({
      message: "Thanks for subscribing",
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.channelMessage()}>Subscribe</button>
      </div>
    )
  }
}
