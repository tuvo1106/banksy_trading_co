const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
// Load User model
const User = require('../models/User')
const { forwardAuthenticated } = require('../config/auth')

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'))

// Register Page
router.get('/register', forwardAuthenticated, (req, res) =>
  res.render('register')
)

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' })
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' })
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' })
  }

  if (errors.length > 0) {
    res.status(401).json({ errors })
    return
  }
  const user = await User.findOne({ email })
  if (user) {
    errors.push({ msg: 'Email already exists' })
    res.status(401).json({ errors })
    return
  }
  const newUser = new User({
    name,
    email,
    password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err
      newUser.password = hash
    })
  })

  await newUser.save()
  res.status(200).json({ newUser })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    res.status(401).json({ error: 'Error' })
    return
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) throw err
    if (isMatch) {
      res.status(200).json({ email: user.email, password })
    } else {
      res.status(401).json({ error: 'Error' })
    }
  })
})

// Logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/users/login')
})

module.exports = router
