import test from 'ava'
import alfyTest from 'alfy-test'

test(async t => {
  const alfy = alfyTest()
  const result = await alfy('mathjs add 1 2')

  t.deepEqual(result,
    [{
      'title': 'mathjs add 1 2',
      'subtitle': 'RUN mathjs add 1 2',
      'arg': 'mathjs add 1 2'
    }])
})
