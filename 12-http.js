const http = require('http')

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.end('Welcome to out homepage')
    }
    if(request.url === '/about'){
        response.end('Here is our short history')        
    }
    response.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)