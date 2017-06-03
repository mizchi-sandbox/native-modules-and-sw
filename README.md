# ES Modules playground with http/2

Exprentments about service-worker and native es-modules.

This repository is based on uupaa/WebApp2.

## What I do

- Compile js by babel in service-worker (flow)
- Rewrite all import path by sw/babel-plugin-rewrite-import-path
- import `redux` and it works.

`app/js/entry.js` works.

```js
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
```

## Build

```sh
$ yarn create:server:certificate
$ yarn build:image
$ sh install-modules.sh
$ yarn start:dev
$ open localhost:8080 # http
$ open localhost:8443 # https
```

---

# WebApp/2

Docker + HTTP/2 + ESModules based WebApplication develop environment.

## Document

```
$ yarn create:server:certificate
$ yarn build:image
```

## Licence

MIT License

Copyright (c) 2017 mizchi
Copyright (c) 2017 uupaa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
