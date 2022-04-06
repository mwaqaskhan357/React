import React, { Component } from "react"

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  increament = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    const { count } = this.state
    return <div>{this.props.children(count, this.increament)}</div>
  }
}
