const path = require('path')
const rootDir = path.resolve(__dirname, './../../')

const paths = {
  client:     `${ rootDir }/client/`,
  components: `${ rootDir }/client/components`,
}

module.exports = { paths }
