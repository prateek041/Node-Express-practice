const promise = new Promise((resolve, reject) => {
    // resolve("hehe boi we are good")
    reject("Bruh")
})

console.log(promise.catch((err) => console.log(err)))

// console.log(promise.then((success) => console.log(success)))

let curStatus = true
const comment = "hehe boii"

const tryFunc = (comment, curStatus) => {
    return new Promise((success, fail) => {
        if (curStatus == true) {
            success(`yo boy, here is your comment: ${comment}`)
        }
        fail("im not ready as of now")
    })
}

// tryFunc(comment, curStatus).then((data) => console.log(data)).catch((err) => console.log(err))
tryFunc(comment, curStatus).then((data) => console.log(data)).catch((err) => console.log(err))

console.log('we are waiting or are we done ?')

// promise is an object, which has properties that define the status of that promise.

