import React, { Component } from "react"

export default class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    console.log(this)
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        {/* <button onClick={this.handleEvent.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.handleEvent()}>Click</button> */}
        <button onClick={this.handleEvent}>Click</button>
        {/* <button onClick={this.handleEvent}>Click</button> */}
      </div>
    )
  }
}
