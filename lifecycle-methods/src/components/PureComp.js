import React, { PureComponent } from "react"

export default class PureComp extends PureComponent {
  render() {
    console.log("Pure component")
    return <div>Welcome {this.props.name} to pure Component</div>
  }
}
