'use strict'

const { boat } = require('../../model')

module.exports = async (fastify, opts) => {
    fastify.get('/:id', async (request, reply) => {
        boat.read(request.params.id, (err, result) => {
            if (err) {
                if (err.message === 'not found') {
                    reply.notFound()
                    return
                }
                reply.send(err)
            }
            reply.send(result)
        })
        await reply
    })
}