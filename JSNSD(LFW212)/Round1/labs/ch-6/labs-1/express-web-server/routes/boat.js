const { Router } = require('express')

const { boat } = require('../model')

const router = Router()

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    boat.read(id, (err, theBoat) => {
        if (err) {
            if (err.message === 'not found') {
                err.status = 404
            }
            next(err)
        } else {
            res.type('application/json')
            res.end(JSON.stringify(theBoat))
        }
    })
})

router.post('/', (req, res, next) => {
    const isJSON = req.headers['content-type'] === 'application/json'
    if (isJSON) {
        const { data } = req.body
        const uid = boat.uid()
        boat.create(uid, data, (err) => {
            if (err) {
                next(err)
            } else {
                res.status(201)
                res.send({ id: uid })
            }
        })
    } else {
        next(Error('wrong type'))
    }
})

module.exports = router
