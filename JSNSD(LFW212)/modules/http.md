# http

## Properties

- STATUS_CODES

  Lists of key-value pairs where key is the 3-numbered status code, value is the description of that status code.

  ![](images/STATUS_CODES.png)
  

## Methods

- `createServer()`

  ```js
  http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(someString)
  })
  ```

  - Return value

    server object

    ```javascript
    server.listen(PORT)
    ```

  - Handler

    ```js
    (req, res) => {
        ...
    }
    ```

    - req

      - properties:

        - url

          The `"/hello"` in `http://localhost:3000/hello`

        - method

          The possible values are: 

          - `"GET"`

    - res

      - properties:
        
        - statusCode

          It literally is a number like `405` without qoutes.

### Notes

1. You need to append `'\r\n'` into the response if the response does not include one. Otherwise it will look very bad.
2. You should assign status code to `res` object by yourself. For example: 
   ```javascript
   res.statusCode = 405
   ```