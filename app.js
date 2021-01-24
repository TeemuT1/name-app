const express = require('express')
const path = require('path')
const app = express()

const namesRouter = require('./controllers/names')

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api/names', namesRouter)

app.listen(PORT, () => {
  console.log('server started on port 5000')
})