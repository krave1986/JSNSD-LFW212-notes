'use strict'

const hnLatestStream = require('hn-latest-stream')

module.exports = async (fastify, opts) => {
    fastify.get('/', (request, reply, next) => {
        const { amount = 10, type = 'html' } = request.query

        if (type === 'html') {
            reply.type('text/html')
        }
        if (type === 'json') {
            reply.type('application/json')
        }
        return hnLatestStream(amount, type)
    })
}