var stringify = require('./index')
var test = require('tape')

test('basics', function(assert) {
  var obj = {'key': 1}
    , st = stringify()
  st.on('data', function(item) {
    assert.equal(item, '{"key":1}')
  })
  st.write(obj)
  st.end()
  assert.end()
})
