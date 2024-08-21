const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.end('welcome to our Homepage')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
       <h1>Oops</h1>
       <p>We can't seem to find the page your are looking for</p>
       <a href='/'>Back home</a> 
        `)
})

server.listen(5000)