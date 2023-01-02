const http = require("http")
const url = require("url")

const data = require('./data')

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { pathname } = url.parse(req.url)
        if (pathname === '/') {
            const theData = await data()
            res.end(theData)
            return
        }
        res.statusCode = 404
    } else {
        res.statusCode = 404
    }
    res.end()
}

const server = http.createServer(handler)

server.listen(3000)