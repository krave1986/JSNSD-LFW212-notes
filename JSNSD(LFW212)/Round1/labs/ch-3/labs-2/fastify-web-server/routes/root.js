'use strict'

const { STATUS_CODES } = require('http')


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.post('/', async function (request, reply) {
    reply.code(405)
    return STATUS_CODES[405]
  })
}
