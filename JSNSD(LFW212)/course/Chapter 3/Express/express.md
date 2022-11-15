# Express 4

## Preparation

1. `npm init -y` to create package.json
2. `npm install express@4 http-errors@2` to install dependencies
3. Add `bin\www`

## Usage

### Express server instance

`const app = express()`

### Exports

`module.exports = app`

`app` will be exported to `bin/www` and passed to `http.createServer()` as a callback. This callback take `req` and `res` objects as arguments.

### Methods

- `app.use(callback)`

Configure express servers' behavior.

  - `callback(req, res, next)`

    This function will be called for every incoming request.

    - `res.send()`

      Express use this method instead of `res.end()` function to perform data sending and connection ending. It is because `res.send()` function will detect Content-Type based on its input, and perform additional operations. For example, `res.send()` will convert object to JSON and set Content-Type as `application/json` .

    - `next()`

      This function is an error-first callback function.
      It is called when middleware function finished its job and ready to handover to next middleware function.

      If `next()` function not called, processing of the request is finished. The following middleware functions will not be called for this request.


## The last two middleware functions

At the beginning of the express part of the tutorial, we registered our first two middleware functions.

The first one should always be the second-to-last middleware function. Because it will hit by any requests not matching any predefined routes. That would be path unmatched or verb unmatched.

The second one is the last piece of our middlewares. It is special because it has 4 parameters. Express knows it is final error handling middleware based on the number of the function. So Express will pass the error object which we passed to the `next()` function to this special function as the first argument. We can get HTTP status code and error message from this error object. 

## Miscellaneous

### The content of bin/www

```
#! /usr/bin/env node
'use strict'

const app = require('../app')
const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT)
```

