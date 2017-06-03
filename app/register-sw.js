// const swReady = new Promise(resolve => {
//   navigator.serviceworker.addEventListener('controllerchange', resolve)
// })

navigator.serviceWorker
  .register('/app/sw.js', { scope: '/app/' })
  .then(registration => {
    if (navigator.serviceWorker.controller) {
      return
    }
    // return swReady
  })
  .then(() => {
    console.log('ready')
    // assert_true(navigator.serviceWorker.controller)
  })
