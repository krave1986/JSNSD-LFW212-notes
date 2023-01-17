const http = require('http')
const url = require('url')

const data = require('./data')

const handler = (req, res) => {
    if (req.method === 'GET' && url.parse(req.url).pathname === '/') {
        data().then(output => res.end(output))
    } else {
        res.statusCode = 404
        res.end(http.STATUS_CODES[404])
    }
}

const server = http.createServer(handler)

server.listen(3000)