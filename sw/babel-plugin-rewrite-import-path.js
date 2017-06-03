/* eslint-disable */
const babel = require('babel-core')
const url = require('url')
const path = require('path')

module.exports = function rewriteModulePath({ types }) {
  return {
    pre(file) {
      this.types = types
      this._dirname = path.dirname(this.opts.filename || file.opts.filename)
      this._base =
        this.opts.base || (typeof window === 'undefined' ? process.cwd() : '/')
    },

    visitor: {
      ImportDeclaration(nodePath) {
        const importTarget = nodePath.node.source.value
        const isRelative = importTarget[0] === '.'
        if (isRelative) {
          const relToDir = path.relative('./' + this._base, this._dirname)
          console.log('relative', this._base, relToDir, importTarget)
          nodePath.node.source.value = path.join(
            this._base,
            relToDir,
            importTarget + (importTarget.indexOf('.js') > -1 ? '' : '.js')
          )
          // } else if (this.opts.alias[importTarget]) {
        } else {
          console.log('expect module', importTarget, this.opts.alias)
          nodePath.node.source.value = path.join(
            this._base,
            this.opts.alias[importTarget]
          )
        }
      }
    }
  }
}
