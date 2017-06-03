/* eslint-disable */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    format: 'es',
    plugins: [
      resolve({
        jsnext: true
      })
    ],
    entry: 'node_modules/redux/es/index.js',
    dest: 'app/modules/redux.js'
  },
  {
    format: 'es',
    plugins: [
      commonjs(),
      resolve({
        main: true
      })
    ],
    entry: 'node_modules/xtend/immutable.js',
    dest: 'app/modules/xtend.js'
  }
]
