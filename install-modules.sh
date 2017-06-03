#!/usr/bin/env sh
yarn install
./node_modules/.bin/watchify -t babelify sw/index.js -o app/sw.js -v
mkdir -p app/js/modules
cp -r node_modules/redux/es app/js/modules/redux
cp -r node_modules/symbol-observable/es app/js/modules/symbol-observable
