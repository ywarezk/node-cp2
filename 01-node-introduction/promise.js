/**
 * Promise JS
 * promise class wraps async code
 * single api to deal with async code
 */

// class Promise {
    

//     constructor(asyncFunc) {
//         this.status = "pending"
//         // resolve

//         asyncFunc(this.resolve);
//     }

//     resolve() {
//         this.status = "resolved"
//     }
// }

// Timer Promise
// Promise -> Pending -> Resolved
// Promise -> Pending -> Rejected
// Promise<string>
const timerPromise = new Promise(function(resolve, reject) {
    // our async code will be here

    setTimeout(function() {
        resolve("hello");
        // resolve("world");
        // reject(new Error("something happened"))
    }, 1000);
});

timerPromise.then(
    function(msg) {
        console.log(msg)
    },
    function(err) {

    }
)

console.log("will this run before listener console.log")

timerPromise.then(
    function(msg) {
        console.log(msg)
    },
    function(err) {

    }
)

// Promise for reading a file
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

// then => Promise<string>
readFilePromise.then(
    function(data) {
        return "hello"    
    }, 
    function(err) {
        // return true;
        throw err
    }
)

/**
 * @returns {Promise<number>}
 */
async function useTimer() {
    const hello = await timerPromise;
    try {
        const fileContent = await readFilePromise;
    } catch(err) {

    }
    
    return 33;
}

// useTimer().then(
//     () => {

//     },
// )
