const express = require('express')
const createError = require('http-errors')

const indexRoutes = require('./routes/index')

const app = express()

app.use('/', indexRoutes)

app.use((req, res, next) => {
    const err = createError(404)
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.end(err.message + "\r\n")
})

module.exports = app