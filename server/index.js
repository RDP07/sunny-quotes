const path = require('path')
const rootDir = path.resolve(__dirname, './../')

const config = require('./config')
const { options } = config

const route = require('./routes/app')

var express = require('express');
const exphbs = require('express-handlebars')

var app = express()

// Webpack
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require(`${ rootDir }/config/webpack/webpack.config.js`)
const webpackCompiler = webpack(webpackConfig)

// HBS Templating
app.enable('view cache')
app.engine('handlebars', exphbs(options.templateEngine))
app.set('view engine', 'handlebars')
app.set('views', options.templateEngine.layoutsDir)

// Serving Assets
app.use(express.static('public'))
app.use('/assets', express.static('public'))


// Routes
app.get('/', route)

// Dev vs Prod JS Serve
if (!config.production) {
  app.use(webpackDevMiddleware(webpackCompiler, {
    noInfo: false,
    quiet: false,
    serverSideRender: true,
    publicPath: `${ rootDir }/build`,
  }))

  app.use(express.static('build'))
}

// Start Application Server
app.listen(config.port, (err) => {
  if (err) return console.error(err.message)
  console.log(`>>>> Server Running -- Listening on ${ config.port }`)
  console.log(`>>>> Env -- ${ process.env.NODE_ENV.toUpperCase() }`)
})
