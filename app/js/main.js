/* @flow */
import { combineReducers } from 'redux' // import external
import sub from './sub' // import internal

sub()
console.log('run entry.js')

// can parse flow vi babel
function twice(val: number): number {
  return val * 2
}
console.log(twice(3))

// can call external modules
const reducer = combineReducers({ home: () => ({}) })
console.log('redux', reducer())
