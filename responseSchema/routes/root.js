'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            value: { type: 'number' }
          }
        }
      }
    }
  }, async function (request, reply) {
    return { value: "NaN" }
  })
}
