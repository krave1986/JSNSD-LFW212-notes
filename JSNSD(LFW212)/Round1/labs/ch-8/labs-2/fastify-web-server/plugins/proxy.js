'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/http-proxy'), {
        upstream: 'https://jsonplaceholder.typicode.com',
        // async preHandler(request, reply) {
        //     if (request.query?.token !== 'abc') {
        //         return reply.unauthorized()
        //     }
        // }
    })
})
