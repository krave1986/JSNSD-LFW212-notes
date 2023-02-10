const createError = require('http-errors')
const { STATUS_CODES } = require('http')


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

router.post('/', (req, res, next) => {
    const isJSON = req.headers['content-type'] === 'application/json'
    if (isJSON) {
        const id = boat.uid()
        boat.create(id, req.body.data, (err) => {
            if (err) {
                return next(err)
            }
            res.status(201)
            return res.send({ id })
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
                return next(createError(404))
            }
            return next(err)
        } {
            res.status(204)
            res.end()
        }
    })
    req, res, next
})

module.exports = router