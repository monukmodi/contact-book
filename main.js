// imports
require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 4000

// Database Connection
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Connected to the Database"))
app.get("/", (req, res) => {
  res.send("Hello Node JS")
})

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`)
})
