# Round 3

1. If you send a request with header `content-type: 'application/json'` without providing JSON payload, the request will reach the handler of corresponding route. Fastify will directly refused the request by `400 Bad Request` with message: `"Body cannot be empty when content-type is set to 'application/json'"` like:
```javascript
http.request(
 'http://localhost:3000/boat',
 { 
     method: 'post', 
     headers: {'content-type': 'application/json'} 
 },
 res => console.log(res.statusCode)
 ).end()
```
So the request payload should at least be like:
```javascript
http.request(
'http://localhost:3000/boat',
{ 
    method: 'post', 
    headers: {'content-type': 'application/json'} 
},
res => console.log(res.statusCode)
).end(JSON.stringify({}))
```
