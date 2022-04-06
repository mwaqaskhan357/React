import axios from "axios"
import React, { useEffect, useState } from "react"

const GetPosts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    console.log("update rendering")
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((error) => console.log(error.message))
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default GetPosts
