'use strict'

const { promisify } = require('util')


const { boat } = require('../../model')

const read = promisify(boat.read)
const create = promisify(boat.create)


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

    fastify.post('/', async (request, reply) => {
        const isJSON = request.headers['content-type'] === 'application/json'
        if (isJSON) {
            try {
                const id = boat.uid()
                await create(id, request.body.data)
                reply.code(201)
                return { id }
            } catch (err) {
                throw err
            }
        } else {
            return reply.badRequest()
        }
    })
}