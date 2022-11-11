# Node Core

## What a minimum web server should do?

1. 基于给出的动词，对 HTTP 请求做出响应
2. 基于路由响应请求
3. 如果路由找不到，则响应 404
4. 设置正确的头，比如 Content-Type

`res` 对象是一个可写流，这也是为什么，调用 `end()` 方法，会写入内容，同时关闭流。

`createServer()` 方法返回 server 对象。
