# ES Modules playground

Next Generation Module Exprentments

- Native ES Modules
- ServiceWorker
- Babel transform in ServiceWorker
- WIP: HTTP/2 Casper

This repository is based on uupaa/WebApp2.

## What I want to do

It works. (`app/js/main.js`)

```js
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
```

## Build

```sh
# frontend
$ yarn install
$ yarn build:deps
$ yarn build:sw

# server
$ yarn create:certificate
$ yarn build:image
$ yarn start:dev

# open
$ open http://localhost:8080 # http
$ open https://localhost:8443 # https: WIP: it does not work without sw certificate
```

## How to add modules

Install to `app/node_modules`

```shell
cd app
yarn add redux
```

Add alias as `jsnext:main` to `conf/module-alias.json` manually

```json
{
  "redux": "node_modules/redux/es/index.js"
}
```

After you edit `module-alias.json`, you need to run `yarn build:sw`.

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
