# [process](https://nodejs.org/api/process.html)

## Methods

- [`process.stdout`](https://nodejs.org/api/process.html#processstdout)

  `process.stdout` 属性返回一个连接了 `stdout` 即 fd `1` 的流。它是一个 `net.Socket` 双工流，除非 fd`1` 指向的是文件，那样的话，它会是一个 可写流。

  - 把 `process.stdin` 拷贝至 `process.stdout`

    ```javascript
    const {stdin, stdout} = require('node:process');

    stdin.pipe(stdout)
    ```
