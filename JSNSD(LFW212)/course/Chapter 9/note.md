# Web Security: Handling user input

## Avoiding Parameter Pollution Attacks (1)

Service crashes because unhandled exception.
Service slows down becuase an exception is generically handled and then caused error handling overhead. If the ammount of the requests is very big, your service will be very slow.

### Step 1: How query-string parsing works?

`name=bob` in ` ht‌tp://example.com/?name=bob`

It will be parsed as `{name: 'bob'}`

#### Array-like query strings

`?name=bob&name=dave` pares as
`{name: ['bob', 'dave']}`

#### Square-bracket denotion syntax in query strings
**Express only**
`?name[]=bob`

If we don't realize the array form of query strings and apply String methods on it, you can forsee the exceptions on the way.

## How to prevent parameter pollution crashing the service?

Ensure any code written for query-string parameters can run against both strings and arrays.

`typeof` or `Array.isArray` will help.

## Route Validation with Fastify

Use `schema` option when declaring routes to do validation.

1. post `'/'`

   We expect there is a `data` property in the post payload. The shape of the payload looks like:
   ```javascript
   { data: { brand, color } }
   ```

   `fastify.post()` can take 3 arguments. The 2nd is the option for `schema`.

## Properties used in schema

- `body`
  - `type`
  - `required` *This is an array*
  - `additionalProperties`
  - `properties` *This is an object*

- `params`

- `response`
  ```javascript
  {
    response: {
        statusCodeNumber: {
            property: { schemaForThisProperty }
        }
    }
  }
  ```
  `statusCodeNumber` can also be `2xx` to cover `200` to `299`.

## [Shared schema](https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validator-compiler)

## Fluent schema
```javascript
S.object().prop('brand', S.string().required()).prop('color', S.string().required()).additionalProperties(false)
```
`S` is the `fluent-schema` instance. See [here](https://github.com/fastify/fluent-json-schema)

## Route Validation with Express

Manual validation...

### Why the `hasOwnProperty` utility function?

It is true that `o.hasOwnProperty('foo)` can check whether `o` has property named as `'foo'`. But due to it is very common to have `hasOwnProperty` function all over various code bases. Someone may overwrite this function. So in order to keep safe, we implemented the `hasOwnProperty` function.

### Why not use `p in o`?

This approach will check properties on prototype chain.
For example, `'toString' in {}` will return true even it is an empty object.

### Why `validateData` function returns an object?
This brings `additionalProperties: false` in fastify into express to strip off any extra properties.

### isIdValid is too old
We can replace `Math.pow(2, 53) - 1` with `Number.MAX_SAFE_INTEGER`.

We can replace the whole function with `Number.isSafeInteger(Number(n))`

## Notes

1. `schema.body.type: object` will usually be the case, even if the service accepts alternative mime-types like multipart. This is because the schema is applied (conceptually) to the body after it has been parsed into a JavaScript object.

2. With `additionalProperties: false`, fastify will remove extra properties and allow the request. This behavior can be [changed](https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/#validator-compiler).

   If extra passed in the payload, when route handler access the payload, the extra propertyies will not even be there. Because it has already been striped off by fastify in advance.

3. Invalidation of request schemas will result in a 400 Bad Request. Invalidation of response schemas will result in a 500 Server Error.