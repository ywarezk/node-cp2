
// express is function that creates Application object
const express = require("express");
const adminApp = require("./admin");

// app: Application
// Application object holds information how to deal with requests 
const app = express();

app.use("/admin", adminApp);

app.get("/", function(req, res) {
    res.send("hello world");
});

// app.get("/api/users")

// server : Server
const server = app.listen(3000, function() {
    console.log("we are now listening on port 3000");
})

// const server2 = app.listen(3001, function() {
//     console.log("we are now listening on port 3000");
// })

// function app(req, res, next) {}


// function Person(age) {

// }
