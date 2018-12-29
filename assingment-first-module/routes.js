const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/' && method === 'GET') {
        
        res.setHeader('Content-type', 'text/html')

        res.write('<html>')
        res.write('<head><title>Greetings</title><head>')
        res.write('<body><h1>Welcome to the HomePage</h1><form action="/create-user" method="POST"><input type="text" name="username" placeholder="username"><button type="submit">Submit</button></form></body>')
        res.write('</html>')

        return res.end()
    }

    if (url === '/users' && method === 'GET') {
        
        res.setHeader('Content-type', 'text/html')

        res.write('<html>')
        res.write('<head><title>Users</title><head>')
        res.write('<body><ul><li>Mark</li><li>Anthony</li></ul></body>')
        res.write('</html>')

        return res.end()

    }

    if (url === '/create-user' && method === 'POST') {
    
        const body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('data', () => {
            
            const parsedBody = Buffer.concat.toString
            const username = parsedBody.split('=')[1]

            console.log(username)

            res.statusCode = 302
            
            res.setHeader('Location', '/')

            return res.end
        })

    }
}

module.exports = {
    handler: requestHandler
}


// res.write('<html>');
// res.write('<head><title>Users</title><head>');
// res.write('<body><ul><li>Mark</li><li>Anthony</li></ul></body>');
// res.write('</html>');


// res.write('<html>');
// res.write('<head><title>Greetings</title><head>');
// res.write('<body><h1>Welcome to the HomePage</h1><form action="/create-user" method="POST"><input type="text" name="username" placeholder="username"><button type="submit">Submit</button></form></body>');
// res.write('</html>');