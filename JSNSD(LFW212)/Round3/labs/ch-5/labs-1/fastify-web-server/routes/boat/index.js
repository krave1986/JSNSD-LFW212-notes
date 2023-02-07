'use strict'

const { promisify } = require('util')


const { boat } = require('../../model')

const read = promisify(boat.read)


module.exports = async (fastify, opts) => {
    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params

        try {
            const theBoat = await read(id)
            return theBoat
        } catch (err) {
            if (err.message === 'not found') {
                return reply.notFound()
            }
            reply.send(err)
        }
    })
}