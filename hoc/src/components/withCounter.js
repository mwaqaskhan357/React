import React from "react"

const withCounter = (WrapedCompoent, increamentNumber = 1) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }

    increament = () => {
      this.setState((prev) => {
        return {
          count: prev.count + increamentNumber,
        }
      })
    }
    render() {
      const { count } = this.state
      return <WrapedCompoent count={count} increament={this.increament} />
    }
  }

  return WithCounter
}

export default withCounter
