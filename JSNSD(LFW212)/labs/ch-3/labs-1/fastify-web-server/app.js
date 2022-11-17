'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines
  fastify.setNotFoundHandler((request, reply) => {
    debugger
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method not allowed'
    }

    reply.status(404)
    return 'Not Found'

  })

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
