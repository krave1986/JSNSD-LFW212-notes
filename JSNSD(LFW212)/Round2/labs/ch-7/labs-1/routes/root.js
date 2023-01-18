'use strict'

const got = require("got")

const gotUtil = (url, timeLimit, timeInterval, timeOrigin) => {

  const start = timeOrigin || performance.now()

  return got(url, {
    retry: {
      calculateDelay: () => {
        return performance.now() + timeInterval - start > timeLimit ? 0 : timeInterval
      }
    }
  })
}

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params

    if (!/^[1-9]\d*$/.test(id)) {
      return reply.badRequest()
    }

    const {
      BOAT_SERVICE_PORT = 44181,
      BRAND_SERVICE_PORT = 37179
    } = process.env

    const boatUrl = `http://localhost:${BOAT_SERVICE_PORT}/${id}`
    const brandUrl = `http://localhost:${BRAND_SERVICE_PORT}/`

    try {
      const theBoat = await gotUtil(boatUrl, 1250, 600, performance.now()).json()
      const theBrand = await gotUtil(brandUrl + theBoat.brand, 1250, 600, performance.now()).json()

      const result = {
        id: +id,
        color: theBoat.color,
        brand: theBrand.name
      }
      return result
    } catch (err) {
      if (err.response) {
        if (err.response.statusCode = 404) {
          return reply.notFound()
        }
      } else {
        throw err
      }
    }
  })
}
