'use strict'
const express = require('express')
const app = express()
const router = express.Router()
const { PORT = 3000 } = process.env

router.get('/', (req, res) => {
  setTimeout(() => {
    let theString = req.query.un
    if (Array.isArray(req.query.un)) {
      theString = req.query.un.join()
    }
    res.send((theString || '').toUpperCase())
  }, 1000)
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})