const { version } = require('./../package.json')

module.exports = {
  apiUrl: process.env.API_URL,
  env: process.env.NODE_ENV,
  options: {
    templateEngine: {
      defaultLayout: 'layout',
      layoutsDir: './server/views',
      partialsDir: './server/views/partials',
      helpers: {
        toJSON: (obj) => JSON.stringify(obj),
      }
    },
    session: {
      cookie: { secure: true },
      proxy: true,
      resave: false,
      saveUninitialized: true,
    },
  },
  production: process.env.NODE_ENV === 'production',
  port: process.env.PORT,
  version,
}
