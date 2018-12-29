const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))


app.use('/admin/', adminRouter)
app.use(shopRouter)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, './views/404.html'))
})

app.listen({
    host: 'localhost',
    port: 3000
})