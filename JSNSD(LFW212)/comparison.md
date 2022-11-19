# Comparison between node core, express and fastify

## Dependencies

| core | express | fastify
|---| --- | ---
|http module: `require("http")`| express: `express@4` | fastify: `npm init fastify`
| | error: `http-errors@2` |
| | express module: `require("express")` |

## Create server

core |
--- |
`http.createServer((req, res) => {})` |

## Start server

core |
--- |
`server.listen(PORT)` |

## Set path for routes

core | express | fastify
--- | --- | ---
Code logic | `app.use(path, routes)` | the part after `routes/` in `__dirname` of the route

## Close connection

core | express |
--- | --- |
`res.end(string)`| NA |

## Set header

core | express | fastify
--- | --- | ---
`res.setHeader('Content-Type', 'text/html')` | | `reply.type('text/html')`

## Set status code

core | express | fastify
--- | --- | ---
`res.statusCode = 405` | `res.status(code_number)` | `reply.status(code_number)`

## Get request verb

core | express |
--- | --- |
`req.method` | `req.method` |

## Write to the stream

core | express | fastify
--- | --- | ---
`res.end('abc\r\n')` | `res.send("message")` | return from route handler or `reply.send()`

## Default status code of response

core |
--- |
`200` |

## Get error message

core | express | fastify
--- | --- | ---
`http.STATUS_CODES[code_number]` | `http-errors.createError(code_number).message` | return plain text

## Error handling

core | express | fastify
--- | --- | ---
manually set `statusCode` and message | last two middleware | `fastify.setNotFoundHandler((request, reply)=>{})`

## Project structure

core | express | fastify |
--- | --- | --- |
as you wish | ![](../images/structureOfExpress.png) | ![](../images/structureOfFastify.png) |

## Chores

core | express |
--- | --- |
everything | `scripts`: `"start": "node ./bin/www"` |

## Serve Static Content

core | express | fastify
--- | --- | ---
plain code | | `fastify-static`

## Dynamic rendering

express | fastify
--- | ---
 | point-of-view