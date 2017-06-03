/* @flow */
import { combineReducers } from 'redux'
import mymod from './mymod'

mymod()

function double(val: number): number {
  return val * 2
}
console.log('entry main', double(3))
const a = { a: 1 }
const b = { ...a, b: 2 }
console.log(b)

const reducer = combineReducers({ home: () => ({}) })
console.log('redux', reducer())
