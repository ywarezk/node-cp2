const fs = require("fs");
const fsPromise = require("fs").promises;

// error first callback
fs.readFile("README.md", function(err, data) {
    if (err) {

    }
});

fsPromise.readFile("README.md").then(
    (data) => {

    },
    (err) => {

    }
)