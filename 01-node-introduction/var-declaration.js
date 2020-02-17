/**
 * how we define variable in JS
 */

// (function() {

// })();

var hello = "world";

let foo = 42;

const isTrue = true;

// isTrue = {hello: world} // ERROR!



if (isTrue) {
    const stam = "asdfs";
    console.log(stam); // OK

    function hello(msg) {
        console.log(stam)
    }
}

console.log(stam); // Error!

var error;

function sayHello() {
    const isTrue = false;

    // ...
    if (true) {
        for(let i=0; i<10; i++) {
            var error = [1,2,3];
            error = "hello";
        }
    }

    console.log(error);

}



