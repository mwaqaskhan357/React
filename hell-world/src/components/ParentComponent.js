import React, { Component } from "react"
import ChildComponent from "./ChildComponent"

export default class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: "Parent",
    }

    this.greatHandler = this.greatHandler.bind(this)
  }

  greatHandler(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greatHandler={this.greatHandler} />
      </div>
    )
  }
}
