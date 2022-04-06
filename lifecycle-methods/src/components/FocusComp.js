import React, { Component } from "react"
import InputComp from "./InputComp"

export default class FocusComp extends Component {
  constructor(props) {
    super(props)

    this.compRef = React.createRef()
  }

  clickHandler = () => {
    this.compRef.current.inputFocus()
  }

  render() {
    return (
      <div>
        <InputComp ref={this.compRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
