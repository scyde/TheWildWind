const path = require('path')
'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')

const app = module.exports = loopback()
const port = process.env.PORT || 3000

app.use('/', loopback.static(path.resolve(__dirname, '../public')))

app.start = function() {
  // start the web server
  return app.listen(port, function() {
    app.emit('started')
    const baseUrl = app.get('url').replace(/\/$/, '')
    console.log('Web server listening at: %s', baseUrl)
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
    }
  })
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err

    app.get('/',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/news',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/catalog/*',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/catalog',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/about',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/contacts',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
    app.get('/basket',(req,res) => {
        res.sendFile('/public/index.html', {root: './'})
    })
  // start the server if `$ node server.js`
  if (require.main === module)
    app.start()
})
