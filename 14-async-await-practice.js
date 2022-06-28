// async functions will always return a promise.
// await waits till the promise is returned.

const example = async () => {
    return "hello world"
}

// console.log(example())

async function someFunc() {
    const result = await example()
    console.log(result)
}

someFunc()