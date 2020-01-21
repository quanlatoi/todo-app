const express = require('express')
const passport = require('passport')

const { login, register } = require('../Controllers/Authentication/index')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)

module.exports = router