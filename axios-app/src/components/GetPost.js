import axios from "axios"
import React, { Component } from "react"

export default class GetPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMessage: "",
    }
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error)
        this.setState({ errorMessage: error.message })
      })
  }

  render() {
    return (
      <div>
        <h1>List of post</h1>
        {this.state.errorMessage ? (
          <div>{this.state.errorMessage}</div>
        ) : (
          this.state.posts.map((post) => <div key={post.id}>{post.title}</div>)
        )}
      </div>
    )
  }
}
