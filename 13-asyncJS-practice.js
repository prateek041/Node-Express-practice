// const promise = new Promise((resolve, reject) => {
//     resolve("hehe boi we are good")
//     // reject("Bruh")
// })

// console.log(promise.catch((err) => console.log(err)))

// console.log(promise.then((success) => console.log(success)))

let globalData;

let curStatus = true
const number = 10

const tryFunc = (comment, curStatus) => {
    return new Promise((success, fail) => {
        if (curStatus == true) {
            success(`yo boy, here is your number increased by 1: ${number + 1}`)
        }
        fail("im not ready as of now")
    })
}


const syncfunc = async () => {
    await tryFunc(number, curStatus).then((data) => globalData = data).catch((err) => console.log(err))
    console.log("tryFunc function finished executing");
    console.log(globalData)
}

syncfunc()



// console.log('we are waiting or are we done ?')

// promise is an object, which has properties that define the status of that promise.

