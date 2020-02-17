/**
 * how to define functions in Javascript
 */

//  (function() {
//     console.log(this) 
//     function sayHello() {
//         // this ? 
//         console.log(this);
//     }

//     const lambda = () => {
//         console.log(this)
//     }

//     this.sayHello()
//  })() => // module.exports = {}

function sayHello(msg) {
    console.log(msg);
}

(function() {

})()

const stam = function() {

}

stam();

sayHello("hello world");

const lambdaFunction = (hello) => {
    console.log(hello);
    console.log(this); // {}
}

lambdaFunction(42);

