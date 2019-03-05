const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

app.use('/static', express.static('static'))
app.use('/serviceworker', express.static('serviceworker'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

// NOTE: HTTPS is required in order to serve a ServiceWorker
app.listen(PORT, () => {
  console.log('server running at port: ' + PORT)
})