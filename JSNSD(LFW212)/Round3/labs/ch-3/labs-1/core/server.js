const http = require('http')
const { parse } = require('url')

const data = require('./data')

const responseHandler = async (req, res) => {
    const { pathname } = parse(req.url)
    if (pathname === '/') {
        const bytes = await data()
        res.end(bytes)
        return
    } else {
        res.statusCode = 404
        res.end(http.STATUS_CODES[404])
    }
}

const server = http.createServer(responseHandler)

server.listen(3000)
