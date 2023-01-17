'use strict'

module.exports = async (fastify, opts) => {
    fastify.get('/', (request, reply) => {
        reply.view('me')
    })
}