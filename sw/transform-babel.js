const babel = require('babel-core')
const { parse } = require('url')
const rewriteModulePath = require('./babel-plugin-rewrite-import-path')

const babelConfigWithPath = filename => ({
  presets: [require('babel-preset-flow')],
  plugins: [
    require('babel-plugin-transform-object-rest-spread'),
    [
      rewriteModulePath,
      {
        base: '/app',
        alias: {
          myextmod: './js/modules/myextmod.js',
          'lodash-es/isPlainObject': './js/helper/isPlainObjectMock.js',
          'symbol-observable': './js/modules/symbol-observable/index.js',
          redux: './js/modules/redux/index.js'
        },
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
  if (url.indexOf('/app/js/') > -1) {
    console.info('sw: handle fetch', url)
    return ev.respondWith(fetchTransformedJS(url))
  }
})
