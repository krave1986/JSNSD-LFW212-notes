'use strict'

const got = require('got')

const fixedGot = require("@krave/fixed-got")

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params

    if (!/^[1-9]\d*$/.test(id)) {
      reply.code(400)
      return "Bad request"
    }

    const { BOAT_SERVICE_PORT = 39935, BRAND_SERVICE_PORT = 43595 } = process.env

    const boatUrl = `http://localhost:${BOAT_SERVICE_PORT}/${id}`
    const brandUrl = `http://localhost:${BRAND_SERVICE_PORT}/`

    try {
      const { brand: brandId, color } = await fixedGot(boatUrl, 1250, 600, performance.now()).json()
      const { name: brand } = await fixedGot(brandUrl + brandId, 1250, 600, performance.now()).json()

      return { id: Number(id), color, brand }
    } catch (err) {
      if (err.response) {
        console.log(err.response.statusCode);
        if (err.response.statusCode === 404) {
          reply.notFound()
          return "Not Found"
        }
        if (err.response.statusCode === 400) {
          reply.badRequest()
          return "Bad Request"
        }
      } else {
        throw err
      }
    }

  })
}
