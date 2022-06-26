const http = require('http')

console.log('hello')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    }
    if (req.url === '/about') {
        // this is the blocking code.
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('about page')
    }
    res.end('Error page')
})

server.listen(8989, () => {
    console.log('server is listening on port 5000')
})