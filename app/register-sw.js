/* eslint-disable */
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
