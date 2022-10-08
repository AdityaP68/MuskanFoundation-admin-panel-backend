const express = require('express')
const bodyParser = require('body-parser')
const transactionRoutes = require('../routes/transactionRoutes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/admin/transaction',transactionRoutes)

module.exports = app