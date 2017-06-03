/* @flow */
require('./transform-babel')

self.addEventListener('install', function(_ev) {
  console.log('sw: installed')
})

self.addEventListener('activate', function(ev) {
  console.log('sw: activated')
  ev.waitUntil(self.clients.claim())
})
