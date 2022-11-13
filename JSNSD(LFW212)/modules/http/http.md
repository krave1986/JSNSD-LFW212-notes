# http

## Properties

- `STATUS_CODES`

  Lists of key-value pairs where key is the 3-numbered status code, value is the description of that status code.

  ![](../images/STATUS_CODES.png)
  

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
          It is the part which is started by a single slash in the URL.

          Pass it into `url.parse()` is to eliminate any query strings. For example: `?foo=1` in `/hello?foo=1`. So that the object returned by `url.parse()` will have a `pathname` property which is `"/hello"` only.

        - method

          The possible values are: 

          - `"GET"`

    - res

      - properties:
        
        - statusCode

          It literally is a number like `405` without qoutes.

- `request(url_string, options, response_handler)`
  
  url 字符串可以直接放在参数里，也可以放在 `options` 里面。如果两者都有，那么 `options` 里面的优先级更高。

  根据官方文档，使用 `http.request()` 的情况下，必须调用 `req.end()` 来结束请求，即便是没有数据需要往 请求体 中写入，也要调用这个方法。

  ![](../images/end().png)

  也就是说，我们永远都要把 请求 和 响应当作是一个 stream 来处理。

  参数中，省略 `url_string` ，直接使用 URL 对象作为 `options` 的话，可以这样操作：

  ```js
  const options = new URL('http://abc:xyz@example.com');

  const req = http.request(options, (res) => {
    // ...
  });
  ```
  
  ## 事件顺序

  1. 成功请求的事件顺序

     - `'socket'`

     - `'response'`

       这个事件会直接触发 `request()` 方法中传入的 `response_handler`。
       而在 `response_handler` 中的 `res` 响应对象，会在后续接收到以下事件：

       - `'data'`
         触发次数不定，如果响应体是空的话，`data` 事件就直接不触发了，比如大多数重定向响应。
         
       - `'end'`
         表示响应流关闭了，没有数据了。

     - `'close'`

### Notes

1. You need to append `'\r\n'` into the response if the response does not include one. Otherwise it will look very bad.
2. You should assign status code to `res` object by yourself. For example: 
   ```javascript
   res.statusCode = 405
   ```