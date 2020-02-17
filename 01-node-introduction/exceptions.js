

class MyError extends Error {

}

const myError = new Error("something happened");

// setTimeout(function() {
//     throw myError;
// }, 1000);

// setTimeout(function() {
//     console.log("will this print?");
// }, 2000);

// unhandled exception = terminate the node process

// if (true) {

// }

const timerPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log(myError);
        reject(new Error())
    }, 1000);
});

// timerPromise.then(
//     () => {},
//     (err) => {}
// )

const fs = require("fs");
const readFilePromise = new Promise(function(resolve, reject) {
    
    fs.readFile("oop.js", function(err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data)
        }
    })
});