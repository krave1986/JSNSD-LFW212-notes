'use strict'

const { Router } = require('express')
const theStream = require("../stream")

const router = Router()

router.get('/', (req, res) => {
    theStream().pipe(res)
})

module.exports = router
