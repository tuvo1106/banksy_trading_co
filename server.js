const express = require("express")
const cors = require("cors")
const bodyParse = require("body-parser")
const path = require("path")

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

app.listen(port, error => {
  if (error) throw error
  console.log("Server running on port" + port)
})
