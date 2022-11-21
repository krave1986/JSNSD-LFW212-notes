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