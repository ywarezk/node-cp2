

const express = require('express');

const app = express();

// middleware creator
// req => req.user = {firstName: ...}

function userMiddleware(user) {
    return function(req, res, next) {
        req.user = user;
        next()
    }
}

app.use(userMiddleware({firstName: "Yariv"}))

app.get("/", userMiddleware({firstName: "yariv"}), function(req, res) {

})



app.listen(3000, function() {
    console.log("listening...");
});