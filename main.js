// imports
require("dotenv").config()

const express = require("express")
const session = require("express-session")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 4000

// Database Connection
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Connected to the Database"))

// middlewares

// Parse incoming URL-encoded data and JSON payloads
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Configure session management
app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
)

app.use((req, res, next) => {
  res.locals.message = req.session.message
  delete req.session.message
  next()
})

// set template engine
app.set("view engine", "ejs")

// route prefix
const routes = require("./routes/routes")
app.use("", routes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`)
})
