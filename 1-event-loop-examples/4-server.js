const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('hello world')
})

server.listen(3696, () => {
    console.log('server is listening to port : 3696')
})