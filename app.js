const http = require('http')
const fs = require('fs')
const { fileURLToPath } = require('url')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    const readStream = fs.createReadStream('./content/big.txt', 'utf-8')
    readStream.on('open', () => {
        readStream.pipe(res)
    })
    readStream.on('err', () => {
        res.end("error")
    })
})
    .listen(5001)