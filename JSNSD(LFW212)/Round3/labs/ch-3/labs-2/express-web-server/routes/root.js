const { Router } = require('express')
const createError = require('http-errors')


const router = Router()

router.get('/', (req, res) => {
    res.send("Success")
})

router.post('/', (req, res) => {
    res.status(405)
    const err = createError(405)
    res.end(err.message)
})

module.exports = router