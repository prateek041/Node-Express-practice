console.log('first')
setTimeout(() => { // since setTimeout is asynchronous, therefore it gets offloaded.
    console.log('second')
})

console.log('third')
console.log('fourth')

// the above setTimeout is handled when the current code it executed completely.i.e. In the end.