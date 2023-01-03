'use strict'

const theStream = require('../../stream')


module.exports = async function (fastify, opts) {
    fastify.get('/', async (request, reply) => {
        return theStream()
    })
}