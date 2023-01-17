const { Router } = require('express')

const router = Router()

const { boat } = require('../model')
const createError = require("http-errors")

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    boat.read(id, (err, theBoat) => {
        if (err) {
            if (err.message === 'not found') {
                next(createError(404))
            } else {
                next(err)
            }
        } else {
            res.send(theBoat)
        }
    })
})

module.exports = router
