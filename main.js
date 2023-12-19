// imports
require("dotenv").config()

const express = require("express")

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
  res.send("Hello Node JS")
})

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`)
})
