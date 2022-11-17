# Fastify

## Initialize fastify project

```
npm init fastify
```

```
npm install
```

## Start server

```
npm run start
```

Npm script looks like:

```
fastify start -l info app.js
```

Fastify uses fastify-cli to start a project. So we don't need a `bin/www` file like in express. We just need to export the biggest plugin in the project from `app.js`. fastify-cli will pass the server instance to it.


## Plugins

A function which accepts server instance, `options` and `next()` as parameters. If `next()` is not in the arguments list, then it should be an async function and returns a promise.

The files in `plugins` folder are often de-encapsulated plugins which can be accessed by sibling plugins. We can regard these files as local libraries.

Every plugins (which means everything in fastify) are called at initialization time. They are always asynchronous (either with a callback or a returned promise) to allow for asynchronous initialization for every plugin.

- `fastify-autoload`

  options:

  - `dir`
    Point `fastify-autoload` plugin to where to load plugins.

  - `options`
    The options which will be passed to all the autoloaded plugins.

## Routes

Everything in fastify is a plugin. We distinguish **plugin** and **route** in order to reason about the functionality of the project.

## `fastify` instance

### Methods

- `fasitfy.register(plugin, options)`

- `fastify.get(path, handler)`

  - `handler` => `(request, reply) => {}`
    The handler of the route.
    It is not a plugin.
    It could be both synchronous or asynchronous.
    Its returned value will be automatically processed simlar to Express and sent as the content of HTTP response.

    If this handler returns an object, fastify will convert it into a JSON payload.

    - `reply`

      #### Methods

      - `reply.send()`
        Instead of return something within the route handler, you can use this method to send response. For example: `reply.send({root: true})`.

- `fastify.setNotFoundHandler((request, reply)=>{})`
## Files

- app.js

  Entry point of the whole fastify project. It exports an async function which is also a plugin. `fastify-autoload` plugin is registered twice here.

  - routes

    - root.js
      This file exports an async function which accepts `fastify` instance and an options object as argument. So it also exports a plugin function.

      It calls `fastify.get()` to register an HTTP GET route.

    - example

      - index.js

## `fastify-cli`

### Flags

  - `-p`
    Specify the server port. Defaults to 3000.

  - `-w`
    Watch the project files and auto reload.

  - `-P`
    Prettify the log output.

## Notes

1. Even in the handler of `fastify.setNotFoundHandler()`, one still needs to set the status code of the reply object via `reply.status(404)` or `reply.status(405)` and so on.