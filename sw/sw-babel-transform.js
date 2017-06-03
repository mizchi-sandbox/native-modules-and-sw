/* @flow */
const { parse } = require('url')
const babel = require('babel-core')
const rewriteModulePath = require('./babel-plugin-rewrite-import-path')

const babelConfigWithPath = filename => ({
  presets: [require('babel-preset-flow')],
  plugins: [
    require('babel-plugin-syntax-object-rest-spread'),
    [
      rewriteModulePath,
      {
        base: '/app',
        filename
      }
    ]
  ]
})

const fetchTransformedJS = url => {
  return fetch(url).then(res => res.text()).then(source => {
    const transformed = babel.transform(
      source,
      babelConfigWithPath(parse(url).path)
    )
    return new Response(transformed.code, {
      headers: { 'Content-Type': 'text/javascript' }
    })
  })
}

self.addEventListener('fetch', ev => {
  const url = ev.request.url
  if (url.indexOf('/app/js/') > -1 || url.indexOf('/app/modules') > -1) {
    console.info('sw: handle fetch', url)
    return ev.respondWith(fetchTransformedJS(url))
  }
})
