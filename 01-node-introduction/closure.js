/**
 * closure where js will look for the variables
 */

let hello = "world";

setTimeout(function() {
    console.log(hello); // world
    hello = "foo";
}, 1000);

setTimeout(function() {
    console.log(hello); //
}, 2000);

