'use strict'

const { bicycle } = require('../../model')

module.exports = async (fatify, opts) => {
    fatify.get('/:id', async (request, reply) => {
        const { id } = request.params
        bicycle.read(id, (err, result) => {
            if (err) {
                if (err.message === 'not found') {
                    reply.notFound()
                } else {
                    reply.send(err)
                }
            } else {
                reply.send(result)
            }
        })
        // Prevent the implicit return value finishes the response too early.
        await reply
    })
}