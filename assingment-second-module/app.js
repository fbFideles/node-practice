const express = require('express')

const app = express()

// app.use('/1', (req, res, next) => {
//     console.log('Something')
//     next()
// })

// app.use('/', (req, res, next) => {
//     console.log('Some')

//     res.send('<h1>Hello some</h1>')
// })

app.use('/users', (req, res, next) => {
     console.log('Some')
    
     res.send('<h1>Hello some</h1>')
})

app.use('/users', (req, res, next) => {
    console.log('Some')
   
    res.send('<h1>Hello some</h1>')
})

app.listen({
    host: 'localhost',
    port: 3000
})