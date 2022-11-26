'use strict'

const { boat } = require("../model")
const { Router } = require('express')
const router = Router()

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    boat.read(id, (err, result) => {
        if (err) {
            if (err.message === 'not found') {
                next()
                return
            }
            next(err)
            return
        }
        res.send(result)
    })
})

module.exports = router
