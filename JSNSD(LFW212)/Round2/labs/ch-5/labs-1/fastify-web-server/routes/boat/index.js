'use strict'

const { boat } = require('../../model')


module.exports = async function (fastify, opts) {
    fastify.get('/:id', (request, reply) => {
        const { id } = request.params
        boat.read(id, (err, theBoat) => {
            if (err) {
                if (err.message === 'not found') {
                    reply.notFound()
                } else {
                    reply.send(err)
                }
            } else {
                reply.send(theBoat)
            }
        })
    })
}