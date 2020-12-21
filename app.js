if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const app = express()
const MainRouter = require('./routers')
const errorHandler = require('./middlewares')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', MainRouter)
app.use(errorHandler)

module.exports = app;