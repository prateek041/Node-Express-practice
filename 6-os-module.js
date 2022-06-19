const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The system has been for ${os.uptime()} seconds`)

var currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)