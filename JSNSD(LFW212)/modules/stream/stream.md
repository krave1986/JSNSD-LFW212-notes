# Stream

## Usage

```javascript
const stream = require("stream")
```

### `stream`

#### Methods

- `stream.finished(streamBeingListened, (err) => {})`

  It will listen the `streamBeingListened` for `end`, `close` and `error` events. Invoke one single handler for all these events. If the stream is stoped by an error, the error will passed to the handler function.

- `stream.pipe(destinationStream, options)`

  - `options`

    - `end`

      `end: false` can prevent the destination stream being automatically ended by source stream when it is ended. eg. some error occurs on source stream.

      `end: true` is default.

#### Properties

- [`stream.Readable`](https://nodejs.org/api/stream.html#class-streamreadable)

  - [`readable.pipe(destination[,options])`](https://nodejs.org/api/stream.html#readablepipedestination-options)  

    - Return value

      The `destination` writable stream.

  ##### [stream.Readable.from(iterable[, options])](https://nodejs.org/api/stream.html#streamreadablefromiterable-options)

## [Implementing a transform stream](https://nodejs.org/api/stream.html#implementing-a-transform-stream)

- ### `new stream.Transform([options])`

  - `options`
    - `transform` implements `stream._transform()`
    - `flush` implements `stream._flush()`
    - other options will be passed to both `Writable` and `Readable` constructors.

  - #### `transform._transform(chunk, encoding, callback)`  
    - `chunk`
      - `Buffer` which is converted based from the `string` passed to `stream.write()`
      - or whatever passed to `stream.write()` if `decodeStrings: false` or in object mode.

    - `encoding`
      If `chunk` is a string, this is the encoding type.
      If `chunk` is a buffer, this is `'buffer'`.

    - `callback`
      - `error`
      - `data`
        `callback` will invoke `transfom.push(data)` with `data` as argument.