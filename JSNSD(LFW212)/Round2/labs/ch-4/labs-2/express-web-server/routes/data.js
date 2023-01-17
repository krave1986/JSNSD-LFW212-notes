const { Router } = require('express')

const router = Router()

const stream = require('../stream')


router.get('/', (req, res, next) => {
    stream().pipe(res)
})

module.exports = router
