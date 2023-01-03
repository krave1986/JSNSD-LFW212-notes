const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('me')
})

module.exports = router