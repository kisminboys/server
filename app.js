if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const app = express()
const MainRouter = require('./routers')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', MainRouter)

module.exports = app;