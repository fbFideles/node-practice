const http = require('http')

const routes = require('./routes')

const server = http.createServer(routes.handler)

server.listen({
    host: '127.0.0.1',
    port: 3000
})