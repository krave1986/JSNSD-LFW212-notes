# Chapter 4: Serving Web Content

Due to through out the course, tutor using same code bases, so our code is still located in `../Chapter 3` directory.

## fastify

We optionally `require()` and `fastify.register()` the `fastify-static` plugin based on the condition of variable `dev`.

Notice that the content of our `index.html`. Now `<a />` points to `/hello.html` instead of `/hello` because it is currently a static HTML file instead of a route.

We need routes if we need to use render engine for dynamic rendering.

## Streaming

### `Transfer-Encoding` header

- `chunked`
  This means chunks of data can be sent over HTTP so that browser can begin parsing immediately. Node.js supports chunked data well.

  Browser doesn't need to wait for the server to prepare and process all data it needs.
  Thanks to chunked data (aka streaming), client can begin parsing theoretically any structured data immidiately before server has finishes reading and processing.

#### Key points

1. Returning stream from route handler can let fastify know that it can pipe this stream to the response of the request. If you don't choose `reply.send(stream)` way, fastify will also pipe the stream to the HTTP response.

