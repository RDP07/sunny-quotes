const { version } = require('./../config')

const appRoute = (req, res) => {
  res.render('app', {
    content: '',
    externalRoute: false,
    title: "It's Always Sunny in Philadelphia Quotes | RDP",
    version
  })
}

module.exports = appRoute
