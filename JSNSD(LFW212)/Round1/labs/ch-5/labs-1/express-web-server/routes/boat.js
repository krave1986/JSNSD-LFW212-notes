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

module.exports = router
