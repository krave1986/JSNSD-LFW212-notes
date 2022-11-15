# Comparison between node core, express and fastify

## Dependencies

| core | express
|---| --- |
|http module: `require("http")`| express: `express@4` |
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

## Close connection

core | express |
--- | --- |
`res.end(string)`| NA |

## Set header

core |
--- |
`res.setHeader('Content-Type', 'text/html')` |

## Set status code

core | express |
--- | --- |
`res.statusCode = 405` | `res.status(code_number)` |

## Get request verb

core | express |
--- | --- |
`req.method` | `req.method` |

## Write to the stream

core | express |
--- | --- |
`res.end('abc\r\n')` | `res.send("message")` |

## Default status code of response

core |
--- |
`200` |

## Get error message

core | express |
--- | --- |
`http.STATUS_CODES[code_number]` | `http-errors.createError(code_number).message` |

## Project structure

core | express |
--- | --- |
as you wish | ![](../images/structureOfExpress.png)

## Chores

core | express |
--- | --- |
everything | `scripts`: `"start": "node ./bin/www"` |