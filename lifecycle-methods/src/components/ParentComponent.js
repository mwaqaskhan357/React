import React, { Component } from "react"
import MemoComp from "./MemoComp"
import PureComp from "./PureComp"
import RegularComponent from "./RegularComponent"

export default class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Waqas",
    }

    this.inputRef = React.createRef()
    this.cbRef = null

    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    this.cbRef.focus()
    console.log(this.inputRef)
    console.log(this.cbRef)
    setInterval(() => {
      this.setState({
        name: this.state.name,
      })
    }, 2000)
  }

  handleClick = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    console.log(
      "*********************************************Parent component*********************************************"
    )
    return (
      <div>
        Welcome {this.state.name}
        {/* <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}
