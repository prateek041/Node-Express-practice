const { log } = require('console');
const EventEmitter = require('events'); // this is the class

const customEmitter = new EventEmitter() // this is the instance of the class.

customEmitter.on('response', (name, id) => { // passing in the name of the event.
    console.log(`data recieved from ${name}, ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data not recieved`)
})

customEmitter.emit('response', 'prateek', 69) // after subscribing to the event, we need to emit it.

