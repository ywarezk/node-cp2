/**
 * OOP
 */

"use strict"

class Person {
    constructor(age) {
        this.name = "Yariv Katz";
        this.age = age;

        // we are binding birthday this to always be the instance of Person
        this.birthday = this.birthday.bind(this);
    }

    birthday() {
        this.age++;
    }
}

const yariv = new Person(34);
console.log(yariv.age); // 34
yariv.birthday();
console.log(yariv.age); // 35

const stamObj = {otherBirthday: yariv.birthday};
stamObj.otherBirthday();
console.log(yariv.age); // 36?
// console.log(stamObj.age);

const birthday = yariv.birthday

// birthday();

function sayHello() {
    // undefined / global
    console.log(this);
    // this.hello = "world"
}

sayHello();

const a = {hello: sayHello};

a.hello();

const sayHello2 = () => {
    console.log(this);
}

sayHello2();

const b = {hello: sayHello2};

b.hello();

const c = {hello: 1}

c.hello = () => {
    console.log(this);
}
c.hello();