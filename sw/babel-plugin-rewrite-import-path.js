/* eslint-disable */
const url = require('url')
const path = require('path')

module.exports = function rewriteModulePath({ types }) {
  return {
    pre(file) {
      this.types = types
      this._dirname = path.dirname(this.opts.filename || file.opts.filename)
      this._base = this.opts.base || '/'
    },

    visitor: {
      ImportDeclaration(nodePath) {
        const importTarget = nodePath.node.source.value
        const importTargetWithExt =
          importTarget + (importTarget.indexOf('.js') > -1 ? '' : '.js')
        const isRelative = importTarget[0] === '.'
        if (isRelative) {
          const relToDir = path.relative('./' + this._base, this._dirname)
          nodePath.node.source.value = path.join(
            this._base,
            relToDir,
            importTargetWithExt
          )
        } else {
          nodePath.node.source.value = path.join(
            this._base,
            'modules',
            importTargetWithExt
          )
        }
      }
    }
  }
}
