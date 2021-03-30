const express = require('express')
const router = express.Router()
const db = require("../db/models")
const { csrfProtection, asyncHandler } = require("./utils") 
const app = express()

app.get("/user/register", csrfProtection, (req, res) => {
    const newUser = db.User.build()
    res.render('register', { title: 'Title', csrfToken: req.csrfToken()})
})

app.post("/user/register", csrfProtection, (req, res) => {});