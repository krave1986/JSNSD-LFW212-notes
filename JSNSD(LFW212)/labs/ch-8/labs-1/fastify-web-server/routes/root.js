'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const { url } = request.query
    const { badRequest } = fastify.httpErrors

    try {
      new URL(url)
    } catch (err) {
      throw badRequest()
    }

    return reply.from(url)
  })
}
