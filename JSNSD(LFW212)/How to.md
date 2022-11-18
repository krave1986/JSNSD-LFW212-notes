# How to doc

1. How to determine the current env is `dev` or `production`?
   
   ```javascript
   const dev = process.env.NODE_ENV !== 'production'
   ```
   We can do this based on the value of `dev`.

   