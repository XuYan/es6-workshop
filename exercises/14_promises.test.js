// For each then() or catch() block, pick whether it should run or not
// If it should run, tell which value it will receive in `result` or `error`
// If it should not run, uncomment the error throwing statement
test(`should resolve`, () => {
  return pickApple('ripe')
    .then(
      result => {
        expect(result).toBe('ripe apple')
      },
      error => {
        throw new Error('this should not run')
      },
    )
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(
      result => {
        throw new Error('this should not run')
      },
      error => {
        expect(error).toBe('unripe apple')
      },
    )
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      throw new Error('this should not run')
    })
    .catch(error => {
      expect(error.message).toBe('out of apples')
    })
})

function pickApple(ripeness) {
  // Immediately return a promise which will eventually get resolved
  // or rejected by calling the corresponding function.
  return new Promise((resolve, reject) => {
    // Do something asynchronous. Could be AJAX, using a timeout here.
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject('unripe apple')
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Promises&em=
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
 * 1. When a rejected promise is caught in error handler and that error handler doesn't re-throw, 
 * the following chained error handlers won't be called.
 */