const http = require('http')
const url = require('url')

const responseHandler = (req, res) => {
    const { pathname } = url.parse(req.url)
    if (pathname === '/') {
        if (req.method === 'GET') {
            res.end(http.STATUS_CODES[200])
            return
        }
        if (req.method === 'POST') {
            res.statusCode = 405
            res.end(http.STATUS_CODES[405])
            return
        }
    } else {
        res.statusCode = 500
        res.end(http.STATUS_CODES[500])
    }
}

const server = http.createServer(responseHandler)

server.listen(3000)