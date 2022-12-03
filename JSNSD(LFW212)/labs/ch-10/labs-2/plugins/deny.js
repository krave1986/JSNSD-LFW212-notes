'use strict'

const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.addHook('onRequest', async function (request, reply) {
        if (request.ip === '211.133.33.113') {
            throw fastify.httpErrors.forbidden()
        }
    })
})