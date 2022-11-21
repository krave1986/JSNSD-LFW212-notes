const { Router } = require('express')
const router = Router();
const hnLatestStream = require('hn-latest-stream')
const finished = require("stream").finished;

router.get('/', function (req, res, next) {
    const { type = 'html', amount = 10 } = req.query

    if (type === 'html') {
        res.type('text/html')
    }

    if (type === 'json') {
        res.type('application/json')
    }

    const stream = hnLatestStream(amount, type)

    stream.pipe(res, { end: false })

    finished(stream, (err) => {
        if (err) {
            next(err)
            return
        }
        res.end()
    })
})

module.exports = router