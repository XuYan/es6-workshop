test(`should yield objects with value and done properties`, () => {
  const odds = giveMeOneOddNumber()

  expect(odds.next().value).toBe(1)
  expect(odds.next().value).toBe(3)
  expect(odds.next().done).toBe(false)
  odds.next()
  expect(odds.next().value).toBe(9)
  expect(odds.next().done).toBe(true)

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test(`can be iterated over`, () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0

  // BEWARE, THIS IS BLOCKING/SYNCHRONOUS!
  // Generators are not async/await, those may be in ES2016
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  expect(sum).toBe(20)
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Generators&em=
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
 * 1. Calling generator function will give back an iterator object with next method in it.
 *    Each time we call the method, it'll give back an object ({ value: any, done: boolean }).
 * 2. for...of loop over a generator is synchronous and blocking.
 */