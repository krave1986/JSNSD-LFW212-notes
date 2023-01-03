'use strict'

const express = require('express')
const createError = require('http-errors')

const indexRoutes = require('./routes/index')

const app = express()

app.use('/', indexRoutes)

app.use((req, res, next) => {
    const error = createError(500)
    res.status(500)
    res.end(createError(500).message)
})

module.exports = app