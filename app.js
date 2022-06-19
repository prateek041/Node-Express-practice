const http = require('http')

const server = http.createServer((req, res) => { // when client requests, it is passed in in req object and the response in res object.
    if (req.url === '/') {
        res.end('welcome to my homepage');
    }

    if (req.url === '/about') {
        res.end("It's all about you, all about you");
    }
    res.end(
        `<h1> Oops! </h1>`
    )
})

server.listen(3569)