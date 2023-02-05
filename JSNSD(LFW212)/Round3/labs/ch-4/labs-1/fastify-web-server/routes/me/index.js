'use strict'

const fastify = require("fastify")


module.exports = async function (fastify, opts) {
    fastify.get('/', async (request, reply) => {
        return reply.view('me')
    })
}