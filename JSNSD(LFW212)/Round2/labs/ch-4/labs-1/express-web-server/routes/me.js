const { Router } = require('express')

const router = Router()

router.get('/', (req, res, next) => {
    res.render('me')
})

module.exports = router