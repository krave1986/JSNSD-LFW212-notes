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

router.post('/', (req, res, next) => {
    const isJSON = req.headers['content-type'] === 'application/json'
    if (isJSON) {
        const { data } = req.body
        const id = boat.uid()
        boat.create(id, data, (err) => {
            if (err) {
                next(err)
            } else {
                res.status(201)
                res.send({ id })
            }
        })
    } else {
        next(createError(400))
    }
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    boat.del(id, (err) => {
        if (err) {
            if (err.message === 'not found') {
                next(createError(404))
                return
            }
            next(err)
            return
        }
        res.status(204)
        res.end()
    })
})

module.exports = router
