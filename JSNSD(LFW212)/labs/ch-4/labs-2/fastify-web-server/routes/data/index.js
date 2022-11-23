const dataStream = require("../../stream")

module.exports = async function (fastify, opts) {
    fastify.get('/', (request, reply) => {
        reply.type('text/html')
        return dataStream()
    })
}