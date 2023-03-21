require('dotenv').config()
console.log( process.env.POSTGRES_USER)
console.log( process.env.POSTGRES_PASSWORD)
console.log( process.env.POSTGRES_DB)
const express = require('express');
const errorHandler = require('./middleware/errorHandlers');
const router = require('./routes/index');
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)
app.use(errorHandler)

app.listen(port,() =>{
    console.log(`Listen Port ${port}`)
})

module.exports = app;