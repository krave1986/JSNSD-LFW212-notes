const express = require('express')
const createError = require("http-errors")
const indexRoutes = require('./routes/index')


const app = express()

app.use('/', indexRoutes)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        next(createError(405))
    } else {
        next(createError(404))
    }
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.send(error.message + "\r\n")
})

module.exports = app