'use strict'

const { Router } = require('express')
const router = Router()

const { boat } = require('../model')


router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    boat.del(id, err => {
        if (err) {
            if (err.message === 'not found') {
                next()
                return
            }
            return next(err)
        }
        res.status(204)
        res.end()
    })
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    boat.read(id, (err, theBoat) => {
        if (err) {
            if (err.message === 'not found') {
                next()
                return
            }
            next(err)
            return
        }
        res.send(theBoat)
    })
})

module.exports = router