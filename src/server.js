const express = require('express')
const path = require('path')
const retrieveMessages= require('./client/utils/retrieveMessages')


const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

//initialzing packages
const app = express()

//settings
app.set('port', process.envPORT || 3001)


// add middleware
app.use(express.static(DIST_DIR));


app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})


// start the server
app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'))
})

setInterval(retrieveMessages.retrieveMessages, 5000)