/**
 * import what we exposed in hello.js
 */

//  (function() {

    // const fs = require("fs").readFile;

    // {sayGoodby: sayHello, Person}
    const helloObj = require("./hello");

    helloObj.sayGoodbye('Yariv');

    //  helloObj.Person

    console.log("!!!");
    console.log(__filename);
    console.log(__dirname);
    console.log("!!!");

//  })(require, module)

 