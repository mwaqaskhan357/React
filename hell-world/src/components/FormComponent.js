import React, { Component } from "react"

export default class FormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      comment: "",
      topic: "React",
    }
  }

  handleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value

    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    alert(
      `${this.state.userName} write ${this.state.comment} on topic ${this.state.topic}`
    )
    event.preventDefault()
  }

  render() {
    let { userName, comment, topic } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              value={userName}
              name="userName"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              value={comment}
              name="comment"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>User Name:</label>
            <select value={topic} onChange={this.handleChange} name="topic">
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
