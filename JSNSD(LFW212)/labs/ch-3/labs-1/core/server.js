'use strict'

const http = require("http")
const { STATUS_CODES } = require('http')

const { parse } = require("url")

const data = require("./data")

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (parse(req.url).pathname === '/') {
            data().then(v => res.end(`${v}`))
            return
        } else {
            res.statusCode = 404
        }
    } else {
        res.statusCode = 405
    }
    console.log("hit");
    res.end(`${STATUS_CODES[res.statusCode]}`)
})

server.listen(3000)