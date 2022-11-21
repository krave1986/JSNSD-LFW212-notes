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

### Key points

1. Returning stream from route handler can let fastify know that it can pipe this stream to the response of the request. If you don't choose `reply.send(stream)` way, fastify will also pipe the stream to the HTTP response.

2. Express decorates native HTTP `OutgotingMessage` object, which is the `res` object.
   `res` object is a writable stream. So we can pipe our stream with `res`.

3. Assume there are stream `A` and steam `B`. If `A.pipe(B)`, then B will be ended due to A is ended.

### Why we need to prevent `res` from being ended by `hnLatestStream`?

If some error occurs during the pipe process, then `res` stream will be disrupted immediately. On client side, the user may receive a last entry from the HTTP response. One may think everything is ok, he\she has already got all the news. But the fact is that some error occured, he\she should refresh the webpage or inform the webmaster of the error. So we have to keep the `res` stream alive and send some error message to the client. That's why we can't just let `hnLatestStream` to end `res` stream.

