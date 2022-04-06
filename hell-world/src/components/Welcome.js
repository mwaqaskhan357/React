import React, { Component } from "react"

export default class Welcome extends Component {
  render() {
    const { name, heroName } = this.props
    return (
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    )
  }
}
