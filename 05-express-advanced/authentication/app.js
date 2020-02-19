const express = require("express");
const passport = require('passport');
require("./auth-strategies/jwt");
require("./auth-strategies/local");
const jwt = require("jsonwebtoken");
const promisify = require("util").promisify

const app = express();

app.use(express.json());
app.use(passport.initialize());

// req.body
// Body: email, password
// dont save the password in the database
// use bcrypt creates has
// bcrypt.compare
app.post("/api/user/login", passport.authenticate("local", {session: false}) , async function(req, res, next) {
    // create a JWT token
    const signPromise = promisify(jwt.sign);
    try {
        const token = await signPromise({userId: req.user.id}, process.env.JWT_SECRET || "secret")
        res.json({
            token: token            
        })
    } catch(err) {
        next(err)
    }
    
    // jwt.sign(..., function(err, token) {
    //     next()
    // })
    // next()
});

// 403 -> Forbidden
// app.use("/api", passport.authenticate("jwt", {session: false}))

// function(req, res, next) {
//     // get the token from the header
//     // verify the token ..
//     req.user = {id: 1},
//     next()
// }
app.get("/api/todo", passport.authenticate("jwt", {session: false}), function(req, res) {
    // only valid jwt token can read this
    res.send("Yay we made authentication");
})

app.listen(3000, function() {
    console.log("listening...");
});