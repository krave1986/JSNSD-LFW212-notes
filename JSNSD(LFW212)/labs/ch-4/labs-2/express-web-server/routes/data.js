const express = require('express')
const { Router } = express
const stream = require("../stream")
const { finished, pipeline } = require("stream")


const router = Router()

router.get('/', (req, res, next) => {
    // res.type('text/html')
    const dataStream = stream()
    dataStream.pipe(res, { end: false })
    finished(dataStream, error => {
        // error = new Error('Shit!')
        // if (error) {
        //     next(error)
        //     return
        // }
        res.end()
    })
})

module.exports = router