const { Router } = require('express')
const data = require("../data")

const router = Router()

router.get('/', (req, res) => {
    data().then(theData => res.end(theData))
})

module.exports = router