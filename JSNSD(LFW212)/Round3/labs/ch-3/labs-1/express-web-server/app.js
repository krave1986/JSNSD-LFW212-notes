const express = require('express')
const createError = require('http-errors')

const data = require("./data")

const app = express()

app.get('/', (req, res) => {
    data().then(result => {
        res.send(result)
    })
})

module.exports = app