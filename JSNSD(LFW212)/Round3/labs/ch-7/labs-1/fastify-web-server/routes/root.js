'use strict'

const got = require('got')

const gotUtil = (path, finishWithin, retryInterval, timeOrigin) => {
  return got(path, {
    retry: {
      calculateDelay: () => {
        const current = performance.now()
        const delay = (current + retryInterval - timeOrigin > finishWithin) ? 0 : retryInterval
        return delay
      }
    }
  })
}

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params

    if (!/^\d+$/.test(id)) {
      return reply.badRequest()
    }

    const { BOAT_SERVICE_PORT = 41327, BRAND_SERVICE_PORT = 45633 } = process.env

    const boatUrl = `http://localhost:${BOAT_SERVICE_PORT}/${id}`

    try {
      const theBoat = await gotUtil(boatUrl, 1250, 500, performance.now()).json()

      const brandUrl = `http://localhost:${BRAND_SERVICE_PORT}/${theBoat.brand}`

      const theBrand = await gotUtil(brandUrl, 1250, 500, performance.now()).json()

      return {
        id: Number(id),
        color: theBoat.color,
        brand: theBrand.name
      }
    } catch (err) {
      if (err.response && err.response.statusCode === 404) {
        throw fastify.httpErrors.notFound()
      } else if (
        err.response && err.response.statusCode % 100 === 4 && ![400, 404].includes(err.response.statusCode)
      ) {
        reply.code(500)
        throw err
      } else {
        throw err
      }
    }
  })
}
