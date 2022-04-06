import React, { Component } from "react"

export default class ComponentB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "ComponentB",
    }

    console.log("ComponentB constructor called")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("ComponentB getDerivedStateFromProps called")
    console.log(props)
    return { a: props.a }
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount called")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentB shouldComponentUpdate called")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ComponentB getSnapshotBefore update called")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapUpdate) {
    console.log("ComponentB componentDidUpdate method called")
  }

  render() {
    console.log("ComponentB render")

    return <div>Component B{this.state.a}</div>
  }
}
