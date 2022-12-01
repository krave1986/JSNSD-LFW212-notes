# How to doc

1. How to determine the current env is `dev` or `production`?
   
   ```javascript
   const dev = process.env.NODE_ENV !== 'production'
   ```
   We can do this based on the value of `dev`.

2. How to pass query string into handlebars templates?

   Both express and fastify share the same idea.
   Get the query string you're interested in within route handler.
   Pass it into the `reply.view()` or `res.render()` functions.

3. How to get params from URL?

   Set params in route path when register route.
   Then access `request.params` when request being received to get the params from the request.

4. How to create an error?

   ```javascript
   Error(errorMessage)
   ```

5. How to check the status code of upstream service error in `got`?

   `err.response.statusCode`