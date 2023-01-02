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