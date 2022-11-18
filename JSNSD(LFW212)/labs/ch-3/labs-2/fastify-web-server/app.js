'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines
  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method Not Allowed\r\n'
    }
    if (request.path !== '/') {
      reply.status(404)
      return 'Not Found\r\n'
    }
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
