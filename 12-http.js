const http = require('http');


const server = http.createServer((req, res)=>{
    console.log(req)
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end("Short story")
    }
})
const port = 5000
server.listen(port)
console.log("Server running on port:", port)