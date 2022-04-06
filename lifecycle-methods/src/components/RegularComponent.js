import React, { Component } from "react"

export default class RegularComponent extends Component {
  render() {
    console.log("Regular component")
    return <div>Welcome {this.props.name} to the regular component</div>
  }
}
