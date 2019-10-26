const express = require("express")
const cors = require("cors")
const bodyParse = require("body-parser")
const path = require("path")
const compression = require("compression")
const enforce = require('express-sslify')

// New Code
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const passport = require("passport")
const flash = require("connect-flash")
const session = require("express-session")
// end

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

// Force HTTPS
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
}

app.use(compression())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(cors())

// DB Config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

// Routes
app.use("/users", require("./routes/users.js"))

app.use(express.static(path.join(__dirname, "client/build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(port, error => {
  if (error) throw error
  console.log("Server running on port " + port)
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  }
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})
