const express = require('express')
const path = require('path')
const app = express()

app.set('view engine','ejs')
app.use('/public',express.static('public'))
app.get('/*', (req, res) => {
    'use strict'
    res.render('index')
})
app.listen(80, (err) => {
    'use strict'
    if (err) {
        console.log(err)
    } else {
        console.log('server started successfully!')
    }
})