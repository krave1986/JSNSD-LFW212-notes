const express = require('express')
const { createError } = require("http-errors")


const app = express()

app.use((req, res, next) => {
    debugger
    if (req.method !== 'GET') {
        res.status(405)
    }
})

module.exports = app