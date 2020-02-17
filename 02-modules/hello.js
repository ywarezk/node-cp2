/**
 * expose a function that prints hello world
 */

function sayHello(name) {
    console.log("hello " + name);
    console.log('hello "" ' + name);
    console.log(`
        hello ${name}
        world
        sfdasdf
        xczvzxc
        ${Math.random()}
        ${{"hello": "world"}}
        `
    );

}

class Person {

}

// module.exports = {}
// var exports = module.exports
console.log(exports === module.exports)

// module.exports = {
//     sayGoodbye: sayHello,
//     Person: Person,
//     foo: () => {
        
//     }
// }

// exports.sayGoodby = sayHello;
// exports.Person = Person;

exports = {
    sayGoodbye: sayHello,
    Person: Person,
    foo: () => {
        
    }
}

console.log(exports === module.exports)

// module.exports = {
//     readFile: require("./sdfs"),
//     deleteFile: require("./aaaa"),
// }

// module.exports = require()