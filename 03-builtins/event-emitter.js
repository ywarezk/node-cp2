// class EventEmitter



const EventEmitter = require('events');

class Process extends EventEmitter {

}

const myProcess = new Process();

myProcess.on("hello", function(age, isTrue, msg) {
    // this === myProcess
})

myProcess.on("hello", function(age, isTrue, msg) {

});

myProcess.on("hello", (age, isTrue, msg) => {
    // {}
    // this === module.exports 
});

// myProcess.on("error", function(err) {

// })

myProcess.emit("hello", 34, true, "hello");

myProcess.emit("error", new Error());

setTimeout(() => {
    console.log("is the process still running?")
}, 2000);