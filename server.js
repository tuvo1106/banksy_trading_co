const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
const path = require('path')

// New Code
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
// end

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

app.use(cors())

// Body of new code

// Passport Config
require('./config/passport')(passport)

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Connect flash
app.use(flash())

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})

// Routes
app.use('/', require('./routes/index.js'))
app.use('/users', require('./routes/users.js'))

// end of Body

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
} */

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, error => {
  if (error) throw error
  console.log('Server running on port ' + port)
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})
