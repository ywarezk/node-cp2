/**
 * http is a stateless protocol
 * stateless - request A and request B are not connected to each other
 * another solution: Session
 */

const express = require("express");
const session = require('express-session')


const app = express();


// {
//     "1": {},
//     "2": {},
//     "3": {},
//     "4": {hello: "world"}
// }

// req.session => {}
// SET-Cookie: hello=world; SameSite
// Cookie: connect.sid = #%@^SDGSFDGSDFGSDFGSDFG
app.use(session({
    secret: process.env.SECRET || "hello secret" ,
    cookie: {
        // secure: true,
        // CSRF
        sameSite: true,
        maxAge: 1000 * 60*60*24
    },
    // store: 
}))

app.get("/", function(req, res) {
    // {}
    req.session.hello = "world";
    res.send("hello");
})

app.get("/foo", function(req, res) {
    res.send("foo " + req.session.hello);
})

app.listen(3000, function() {
    console.log("listening...");
});