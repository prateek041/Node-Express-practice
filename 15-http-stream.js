const { readFile, writeFile } = require('fs').promises

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFile("./content/first.txt", "utf-8")
        const second = await writeFile("./content/second.txt", "utf-8")
        await writeFile("./content/promise-write-file.txt", `Here is the result file finally: ${first} ${second}`)
    }
    catch (error) {
        console.log(error);
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await heheBoi('./content/first.txt')
//         const second = await heheBoi('./content/second.txt')
//         console.log(first, second)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// start()

// getText('./content/first.txt')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));