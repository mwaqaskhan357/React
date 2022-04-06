import axios from "axios"
import React, { Component } from "react"

export default class PostApi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      title: "",
      body: "",
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
