'use strict'

const { boat } = require('../../model')


module.exports = async function (fastify, opts) {
    fastify.get('/:id', async (request, reply) => {
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
        await reply
    })

    fastify.post('/', async (request, reply) => {
        const isJSON = request.headers['content-type'] === 'application/json'

        if (isJSON) {
            const id = boat.uid()
            const { data } = request.body

            boat.create(id, data, (err, result) => {
                if (err) {
                    reply.send(err)
                } else {
                    reply.code(201)
                    reply.send({ id: result })
                }
            })
        } else {
            reply.send(fastify.httpErrors.notAcceptable())
        }

        await reply
    })
}