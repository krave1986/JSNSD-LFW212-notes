# Labs

## Chapter 4

### labs-2

- Explanation of stream.js

  `readable.pipe(delay)` turns stream `readable` from pause mode into flowing mode.

  ```javascript
  const delay = new Transform(({
    transform (chunk, enc, cb) {
      setTimeout(cb, 500, null, chunk)
    }
  }))
  ```

  In the above snippet, we know `delay` is a `Transform` stream. It implements its own transform logic. `chunk` is every piece of data written from `readable` to `delay`. `cb` will be called `500` milliseconds after `delay` receives the `chunk`. `cb` accepts two arguments: `error` occurs during the transformation of the `chunk` and some data passed to `transform.push()` which will be available on the readable side of `delay`. After `cb` is called, new `chunk` will be written into `delay`. Same cycle will repeat.

  