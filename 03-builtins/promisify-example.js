

const fs = require("fs");
const util = require("util")

const promisify = util.promisify;

fs.readFile("README.md", function(err, data) {

})

const readFilePromise = promisify(fs.readFile);

readFilePromise("README.md").then(() => {
    
})