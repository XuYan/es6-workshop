import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'
// WRITE YOUR IMPORT STATEMENTS HERE
import { sqrt as mySqrt, square as mySquare } from '../common/Mathy'
import _ from 'lodash'

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('can specify what to import, to only retain pieces of the import', () => {
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('can import from my node_modules', () => {
  // import `lodash`
  expect(_).toBeDefined()
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Modules&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////
test.skip('Index import', () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  expect(IndexImport.variable1).toBe(Bob)
  expect(IndexImport.variable2).toBe(Kent)
  expect(IndexImport.variable3).toBe(222)
  expect(IndexImport.variable4).toBe(false)
})
// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing

/*
  1. Use keyword 'as' to alias imported things.
  2. When importing a directory, runtime will search for index.js in that directory and use its content to decide what to import.
*/