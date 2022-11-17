const data = require("../data")

const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    data().then(value => res.end(value))
})

module.exports = router