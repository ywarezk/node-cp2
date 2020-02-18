/**
 * create our users rest server
 */

const express = require('express');
const userService = require("./services/user.service");
const User = require("./models/user.model")

const app = express();

app.use(express.json());

app.get("/api/users", function(req, res) {
    const users = userService.getUsers();
    // res.send("put text")
    
    // res.send
    res.status(200).json(users);
});

// {}
// req.body
app.post("/api/users", function(req, res) {
    // firstName = <script></script>
    const userJson = req.body;
    const user = new User(userJson)
    userService.addUser(user);
    res.status(201).json(user);
})

module.exports = app;

// app.listen(3000, function() {
//     console.log("we are now listening");
// })