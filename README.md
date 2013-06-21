json-stringify-stream
=====================

Calls JSON.stringify() on data written to it and emits the result.

```javascript
var stringify = require('json-stringify-stream')
  , st = stringify()

st.pipe(process.stdout)
st.write([1,2,3])

/* output:
'[1,2,3]'
*/
```

events
------

`stringify()` instances are readable/writable streams.

Their `data` events are simply the stringified form of what was written to it.

license
-------

MIT