const express = require("express")
const app = express()
require("dotenv").config()
const User = require("./config/config")
const cors = require("cors")
const port = process.env.PORT || 5000

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "hello from simple server :)" })
})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
)
