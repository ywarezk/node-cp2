

const express = require("express");

const app = express();

// sync error
// express know how handle them no need to do anything
app.get("/", function(req, res) {
    req.hello.world
})

// async errors
// express does not know how to catch them
app.get("/async-error", function(req, res, next) {
    // async error
    setTimeout(() => {
        next(new Error());
    }, 1000)
})

// ok error happened lets active the error middlewares

app.use(function(err, req, res, next) {
    // if (err.respose.status === 500)
    next();  
})

app.listen(3000, function() {
    console.log("we are now listening");
})