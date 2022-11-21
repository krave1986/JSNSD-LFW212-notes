# hn-latest-stream

## Usage

```javascript
const hnLatestStream = require('hn-latest-stream')
```

- `hnLatestStream(amount, type)`:
  - `amount`
    The number of most recent Hacker News articles
    
  - `type`
    Specify the chunks inside the returned stream should HTML chunks or JSON chunks.

  - Return value
    A stream.

