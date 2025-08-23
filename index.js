const express = require('express')
const bodyParser = require('body-parser')
//local imports
const connectDb = require('./config/db.js')
const bookRoutes = require('./controllers/book.controller.js')

const app = express()
const { errorHandler } = require('./middlewares/index.js')

//Middleware
app.use(bodyParser.json())
app.use('/api/books',bookRoutes)
app.use(errorHandler)



connectDb()
    .then(() => {
        console.log('db connection successfull')
        app.listen(3000,
    ()=>console.log('Server started at port 3000'))
    })
    .catch(err => console.log(err))