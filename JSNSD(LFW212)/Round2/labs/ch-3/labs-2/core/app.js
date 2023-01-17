const http = require('http')
const url = require('url')

const handler = (req, res) => {
    req, res
    const { pathname } = url.parse(req.url)
    if (pathname === '/') {
        if (req.method === 'GET') {
            res.end("")
        }
        if (req.method === 'POST') {
            res.statusCode = 405
            res.end(http.STATUS_CODES[405])
        }
    }
}

const server = http.createServer(handler)

server.listen(3000)