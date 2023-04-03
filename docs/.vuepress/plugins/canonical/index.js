// This is a fork of: https://github.com/IOriens/vuepress-plugin-canonical
// Insert canonical tags into any page during build time.

const { resolve } = require('path');

module.exports = options => ({
  define () {
    return {
      BASEURL: options.baseURL || '',
      STRIPURL: options.stripExtension || false,
    }
  },
  enhanceAppFiles () {
    return [resolve(__dirname, 'enhanceAppFile.js')]
  },
  globalUIComponents: ['Canonical']
})
