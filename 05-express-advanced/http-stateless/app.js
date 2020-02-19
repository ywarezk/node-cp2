/**
 * http is a stateless protocol
 * stateless - request A and request B are not connected to each other
 * one solution: Cookies
 */

const express = require("express");
const cookieParser = require('cookie-parser')


const app = express();

// Cookie: "hello=world"
// req.cookie = {hello: world}
app.use(cookieParser())

app.get("/", function(req, res) {
    // Set-Cookie
    // localhost:3000
    res.cookie("hello", "world", {
        maxAge: 1000*60*60*24,
        // secure: true,
        sameSite: true,

    });
    res.send("hello");
})

app.get("/foo", function(req, res) {
    res.send("foo " + req.cookies.hello);
})

app.listen(3000, function() {
    console.log("listening...");
});