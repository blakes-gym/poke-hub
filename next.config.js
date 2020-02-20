const env = require('./env')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  env: { ...env }
})
