'use strict'

const { boat } = require('../../model')
const { promisify } = require('util')

const read = promisify(boat.read)


module.exports = async (fastify, opts) => {
    const { notFound } = fastify.httpErrors

    fastify.post('/', (request, reply) => {
        const isJSON = request.headers['content-type'] === 'application/json'
        console.log(`Those errors: ${fastify.httpErrors}`);
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
    })

    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params
        try {
            return await read(id)
        } catch (err) {
            if (err.message === 'not found') {
                throw notFound()
            }
            throw err
        }
    })
}