#  Proxying HTTP Requests

An HTTP Proxy forwards HTTP requests to backend services,
then forwards responses to clients.

## Single-Route, Multi-Origin Proxy (1)

Use `url` query string in a route, then responds with data from that url.

Navigate to `http://localhost:3000/?url=http://google.com` in browser will receive a 301 Moved response and the browser will redirect you to `https://www.google.com/?url=http://google.com`. In this way, your `url` query string will also be leaked to google.

So this approach is only suited when 
1. using URLs that are only accessible internally 
2. and this exposed route is a proxy to accessing them

## Single-Route, Multi-Origin Proxy (2)

### Why we can pass res to `for await (const chunk of res)`?

Because `res` object is an async iterable. This allows us to grab each chunk from the upstream services response, convert it to a string and then uppercase it.

So there are 2 things accept iterable.

1. `for await (const chunk of res)`
2. `Readable.from(theIterable)`

We have 2 iterables here:

1. `res`
2. Return value of `async function* (){}`