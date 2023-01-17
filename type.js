const bodyJsonSchema = {
    type: 'object',
    required: ['requiredKey'],
    properties: {
        someKey: { type: 'string' },
        someOtherKey: { type: 'number' },
        requiredKey: {
            type: 'array',
            maxItems: 3,
            items: { type: 'integer' }
        },
        nullableKey: { type: ['number', 'null'] }, // or { type: 'number', nullable: true }
        multipleTypesKey: { type: ['boolean', 'number'] },
        multipleRestrictedTypesKey: {
            oneOf: [
                { type: 'string', maxLength: 5 },
                { type: 'number', minimum: 10 }
            ]
        },
        enumKey: {
            type: 'string',
            enum: ['John', 'Foo']
        },
        notTypeKey: {
            not: { type: 'array' }
        }
    }
}

const queryStringJsonSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
    }
}

const paramsJsonSchema = {
    type: 'object',
    properties: {
        par1: { type: 'string' },
        par2: { type: 'number' }
    }
}

const headersJsonSchema = {
    type: 'object',
    properties: {
        'x-foo': { type: 'string' }
    },
    required: ['x-foo']
}

const schema = {
    body: bodyJsonSchema,
    querystring: queryStringJsonSchema,
    params: paramsJsonSchema,
    headers: headersJsonSchema
}

fastify.post('/the/url', { schema }, handler)

const schemaCompilers = {
    body: new Ajv({
        removeAdditional: false,
        coerceTypes: false,
        allErrors: true
    }),
    params: new Ajv({
        removeAdditional: false,
        coerceTypes: true,
        allErrors: true
    }),
    querystring: new Ajv({
        removeAdditional: false,
        coerceTypes: true,
        allErrors: true
    }),
    headers: new Ajv({
        removeAdditional: false,
        coerceTypes: true,
        allErrors: true
    })
}

server.setValidatorCompiler(req => {
    if (!req.httpPart) {
        throw new Error('Missing httpPart')
    }
    const compiler = schemaCompilers[req.httpPart]
    if (!compiler) {
        throw new Error(`Missing compiler for ${req.httpPart}`)
    }
    return compiler.compile(req.schema)
})