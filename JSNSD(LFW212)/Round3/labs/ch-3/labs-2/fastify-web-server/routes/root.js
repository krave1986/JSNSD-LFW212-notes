'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.post('/', async function (request, reply) {
    reply.methodNotAllowed()
  })
}
