const http = require("http")
const url = require('url')


const { STATUS_CODES } = http

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 405
    } else if (url.parse(req.url).pathname !== '/') {
        res.statusCode = 404
    }
    res.end(STATUS_CODES[res.statusCode])
})

server.listen(3000)