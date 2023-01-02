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

