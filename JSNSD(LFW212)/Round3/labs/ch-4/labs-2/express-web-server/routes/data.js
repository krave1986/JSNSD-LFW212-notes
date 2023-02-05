const { Router } = require('express')

const router = Router()

const stream = require('../stream')


router.get('/', (req, res) => {
    stream().pipe(res)
})

module.exports = router
