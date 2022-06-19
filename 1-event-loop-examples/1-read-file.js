const { readFile } = require('fs')

// this is the asynchronous way of doing things.

console.log('started the first task')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(result)
    console.log('completed the first task')
})

console.log('starting the second task')