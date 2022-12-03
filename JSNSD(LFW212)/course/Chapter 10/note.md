# Web security: mitigating attacks

## Block an Attackers' IP Address with Express

`http` and `https` module use `net` module for TCP functionality.

`req` and `res` both have a `socket` property which is the underlying TCP socket for the request and response.

### Get the IP address of the request in express

```javascript
req.socket.remoteAddress
```

In order to block an IP, we just need to register a middleware as the first one and check `req.socket.remoteAddress` value.

## Block an Attackers' IP Address with Fastify

### Get the IP address of the request in fastify

```javascript
request.ip
```

Block in the first hook in the life-cycle - `onRequest`.

### Configure the server to block an IP through plugins

```javascript
fastify.addHook('onRequest', async function (request) {
    // ...
})
```

