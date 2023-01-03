'use strict'

const { boat } = require('../../model')
const { promisify } = require('util')
const promisifiedRead = promisify(boat.read)

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
        // try {
        //     return await promisifiedRead(request.params.id)
        // } catch (err) {
        //     if (err.message === 'not found') {
        //         reply.notFound()
        //         return
        //     }
        //     throw err
        // }
    })
}