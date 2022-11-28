# Status codes used in the course

Code | Description
--- | ---
200 | OK
201 | Created
204 | No Content *(This is the only case for JSON service without `Content-Type` being set)*
404 | Not found *This error offten created by libs such as `fastify.httpErrors.notFound()`*