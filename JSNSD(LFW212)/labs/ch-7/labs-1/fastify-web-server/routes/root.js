'use strict'

const got = require("got")

const gotWrapper = async (path, mustThrowWithinThisPeriodIfAnyError, retryInterval = 1000, timeOrigin) => {
  const start = timeOrigin || performance.now()

  console.log(`start is ${start}`);

  return await got(path, {
    retry: {
      calculateDelay: () => {
        const current = performance.now()
        const delay = (current - start + retryInterval > mustThrowWithinThisPeriodIfAnyError) ? 0 : retryInterval
        return delay
      }
    }
  }).json()
}

module.exports = async function (fastify, opts) {

  const { BOAT_SERVICE_PORT = 4000, BRAND_SERVICE_PORT = 5000 } = process.env

  const boatSrv = `http://localhost:${BOAT_SERVICE_PORT}`
  const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`

  fastify.get('/:id', async function (request, reply) {
    const timeOrigin = performance.now()

    const { httpErrors } = fastify
    const { id } = request.params

    if (!Number.isInteger(Number(id))) {
      throw httpErrors.badRequest()
    }

    try {
      const boat = await gotWrapper(`${boatSrv}/${id}`, 1250, 500, timeOrigin)

      if (!Number.isInteger(boat.brand)) {
        throw httpErrors.badRequest()
      }

      const brand = await gotWrapper(`${brandSrv}/${boat.brand}`, 1250, 500, timeOrigin)

      return {
        id: boat.id,
        color: boat.color,
        brand: brand.name
      }
    } catch (err) {
      if (err.response) {

        if (err.response.statusCode === 404) {
          throw httpErrors.notFound()
        }
      }
      throw err
    }
  })
}
