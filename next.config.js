const withSass = require('@zeit/next-sass')
const env = require('./env')

module.exports = withSass({
  env: {
    test: process.env.TEST
  }
})
