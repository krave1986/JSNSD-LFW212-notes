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

    fastify.post('/', (request, reply) => {
        if (request.headers['content-type'] === 'application/json') {
            const { data } = request.body
            const id = boat.uid()
            boat.create(id, data, (err) => {
                if (err) {
                    return reply.send(err)
                }
                reply.code(201)
                return reply.send({ id })
            })
        } else {
            reply.badRequest()
        }
    })

    fastify.delete('/:id', (request, reply) => {
        const { id } = request.params
        boat.del(id, (err) => {
            if (err) {
                if (err.message === 'not found') {
                    return reply.notFound()
                }
                return reply.send(err)
            }
            reply.code(204)
            return reply.send()
        })
    })
}