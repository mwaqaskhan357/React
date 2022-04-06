import React, { Component } from "react"
import FRInput from "./FRInput"

export default class FRParent extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  inputFocus = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.inputFocus}>Click</button>
      </div>
    )
  }
}
