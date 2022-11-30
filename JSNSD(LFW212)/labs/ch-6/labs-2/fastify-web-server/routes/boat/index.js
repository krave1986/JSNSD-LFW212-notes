'use strict'

const { boat } = require('../../model')


module.exports = async (fastify, opts) => {
    fastify.delete('/:id', (request, reply) => {
        const { id } = request.params
        boat.del(id, err => {
            if (err) {
                if (err.message === 'not found') {
                    reply.notFound()
                } else reply.send(err)
            } else {
                reply.code(204)
                reply.send()
            }
        })
    })
    fastify.get('/:id', (request, reply) => {
        const { id } = request.params
        boat.read(id, (err, theBoat) => {
            if (err) {
                if (err.message === 'not found') {
                    reply.notFound()
                    return
                }
                reply.send(err)
                return
            }
            reply.send(theBoat)
        })
    })
}