# Notes

1. Remember the `pahname`!
   ```javascript
   const { pathname } = url.parse(req.url)
   ```

2. If you want to test your route via `http` module, use single quotes inside the outmost dobule quotes.
   ```
   node -e "http.
   get(
   'http://localhost:3000/',
   res => console.log(res.statusCode)
   )
   "
   ```

3. Where to find error message?
   `http.STATUS_CODES`

4. `express@4` and `http-errors@2`

5. 
   ```javascript
   const app = express()
   module.exports = app
   ```
6. 
   ```javascript
   const { Router } = require('express')
   const router = Router()
   module.exports = router
   ```

7. Where is the `www` file?
   `./bin/www`

8. How to use `http-errors`?

   ```javascript
   const createError = require("http-errors")
   const err = createError(404)
   err.message
   err.status
   ```

9. `req` is before `res`

10. The error handling middleware in express will not be hit if there is no errors passed to `next()` in the preceeding middlewares.

11. `fs.copyFileSync('source', 'target')`

12. `fs.rmSync()`

13. In app.js, `fastify.setNotFoundHandler((request, reply) => {})`

14. `npm install -g express-generator`

15. `express --hbs express-web-server` note the `--hbs`

16. 
    ```javascript
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
    ```

17. `res.render('templateName', locals)`

18. Dependencies for fastify are `point-of-view` and `handlebars`

19. Explicit `return` in route handler!!!

20. `res.type('text/html')`

21. Pipe stream to `res` in express:
    ```javascript
    const finished = require("stream").finished;

    stream.pipe(res, { end: false })

    finished(stream, (err) => {
        if (err) {
            next(err)
            return
        }
        res.end()
    })
    ```