const express = require('express')
const createError = require('http-errors')

const indexRoutes = require('./routes')

const app = express();

app.use('/', indexRoutes)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        next(createError(405))
        return
    }
    next(createError(404))
})

app.use((error, req, res, next) => {
    res.status(error.status)
    res.send(error.message)
})

module.exports = app