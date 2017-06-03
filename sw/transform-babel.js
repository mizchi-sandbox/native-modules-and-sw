// Bundle it to app/sw.js
//   > browserify -t babelify sw/index.js -o app/sw.js

const babel = require('babel-core')

const babelConfig = {
  presets: [require('babel-preset-flow')],
  plugins: [require('babel-plugin-transform-object-rest-spread')]
}

const fetchTransformedJS = url => {
  return fetch(url).then(res => res.text()).then(source => {
    const transformed = babel.transform(source, babelConfig)
    console.log('url', url, transformed.code)
    return new Response(transformed.code, {
      headers: { 'Content-Type': 'text/javascript' }
    })
  })
}

self.addEventListener('fetch', ev => {
  const url = ev.request.url
  if (url.indexOf('app/lib/') > -1 && url.indexOf('.js') > -1) {
    return ev.respondWith(fetchTransformedJS(ev.request.url))
  }
})
