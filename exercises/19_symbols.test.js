test('creating symbols', () => {
  const symbol = Symbol()
  expect(typeof symbol).toBe('symbol')
})

test('giving a symbol a description', () => {
  const symbol = Symbol('use the force') // give me a label
  expect(String(symbol)).toBe('Symbol(use the force)')
})

test('symbols are unique', () => {
  const s1 = Symbol()
  const s2 = Symbol()
  expect(s1 === s2).toBe(false)

  const s3 = Symbol('I am a symbol')
  const s4 = Symbol('I am a symbol')
  expect(s3 === s4).toBe(false)
})

test('symbols on objects', () => {
  const symbol = Symbol('metadata')
  // make an object called `game` that
  // makes this test pass
  const game = {
    name: 'The legend of Zelda',
    releaseDate: 'February 21, 1986',
    [symbol]: {
      fans: 'about a billion',
    }
  }

  expect(JSON.parse(JSON.stringify(game))).toEqual({
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
  })
  expect(game[symbol]).toEqual({
    fans: 'about a billion',
  })
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Symbols&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing

/**
 * 1. symbol is a new primitive.
 * 2. How to create a symbol? ---> const sym = Symbol()
 * 3. How to create a symbol with a label? ---> const sym = Symbol('this is a symbol')
 * 4. How to get the label of a symbol? ---> const label = String(sym)
 * 5. symbol property won't show up in stringified object. See the 4th test for an example.
 */