import React, { Component } from "react"
import ComponentB from "./ComponentB"

export default class ComponentA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Component A",
    }

    console.log("ComponentA constructor called")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentA getDerivedStateFromProps called")
    return null
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount called")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentA shouldComponentUpdate called")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ComponentA getSnapshotBefore update called")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapUpdate) {
    console.log("ComponentA componentDidUpdate method called")
  }

  changeState = () => {
    this.setState({
      name: "Changed State",
    })
  }

  render() {
    console.log("ComponentA render")
    return (
      <div>
        <ComponentB a={this.state.name} />
        <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}
