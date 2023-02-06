const createError = require('http-errors')

const { Router } = require("express")

const { boat } = require('../model')


const router = Router()

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    boat.read(id, (err, theBoat) => {
        if (err) {
            if (err.message === 'not found') {
                next(createError(404))
                return
            }
            next(err)
            return
        } else {
            res.send(theBoat)
            return
        }
    })
})

module.exports = router