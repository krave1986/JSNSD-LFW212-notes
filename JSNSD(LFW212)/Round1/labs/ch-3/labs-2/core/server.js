'use strict'

const http = require('http')
const { STATUS_CODES } = require('http')
const url = require('url')

function handler(req, res) {
    if (req.method === 'GET') {
        const { pathname } = url.parse(req.url)
        if (pathname === '/') {
            res.end()
            return
        }
        res.statusCode = 404
        res.end()
        return
    } else {
        if (req.method === 'POST') {
            res.statusCode = 405
            res.end(STATUS_CODES[res.statusCode])
            return
        }
        res.statusCode = 400
        res.end()
        return
    }
}

const server = http.createServer(handler)

server.listen(3000)