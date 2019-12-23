test('has a set method', () => {
  // Create a new map called 'myMap'
  // add a new entry. Use 'name' as the key and 'Aaron' as the value
  const myMap = new Map()
  myMap.set('name', 'Aaron')

  expect(myMap.get('name')).toBe('Aaron')
})

test('can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  // Create a map called 'myMap'
  // add a new entry. Use user as the key, and value as the value
  const myMap = new Map()
  myMap.set(user, value)

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)
})

test(`doesn't coerce keys`, () => {
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(undefined)
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe('Aaron')
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Maps&em=
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
 * 1. Javascript Map's key doesn't have to be string. It can be any data structure. 
 * 2. How to initialize a Map with content directly:
 *    const myMap = new Map([['name', 'Aaron'], ['addr', '1 hacker way']])
 */