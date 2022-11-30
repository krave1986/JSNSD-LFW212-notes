const { Router } = require('express')
const router = Router()

const { boat } = require('../model')

router.post('/', (req, res, next) => {
    const { data } = req.body
    const id = boat.uid()

    const isJSON = req.headers['content-type'] === 'application/json'

    if (!isJSON) {
        next(Error('not acceptable'))
        return
    }

    boat.create(id, data, (err, resultId) => {
        if (err) {
            next(err)
        } else {
            res.status(201)
            res.send({ id: resultId })
        }
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