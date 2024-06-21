//cert pass: ligmaballs
const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')

// Load the SSL certificates
const privateKey = fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8')
const credentials = { key: privateKey, cert: certificate }

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('KDNIE WORKS!')
})

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS Server listening on port ${port}`)
})