const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000

app.use('/static', express.static('static'))
app.use('/serviceworker', express.static('serviceworker'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})


//
const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

https.createServer(httpsOptions, app)
  .listen(PORT, () => {
    console.log('server running at port: ' + PORT)
  })