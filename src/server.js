const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const path = require('path')

const PORT = process.env.PORT || 3000

app.use('/static', express.static('static'))
app.use('/serviceworker', express.static('serviceworker'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

const serverOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}
// NOTE: HTTPS is required in order to serve a ServiceWorker
https.createServer(serverOptions, app).listen(PORT, () => {
  console.log('server running at port: ' + PORT)
})