/**
 * create our users rest server
 */

const express = require('express');
const userService = require("./services/user.service");
const User = require("./models/user.model")

const app = express();

app.use(express.json());

app.route("/api/users")
    .get(function(req, res) {
        const users = userService.getUsers();
        // res.send("put text")
        
        // res.send
        res.status(200).json(users);
    })
    .post(function(req, res) {
        const userJson = req.body;
        const user = new User(userJson)
        userService.addUser(user);
        res.status(201).json(user);
    });

app.route("/api/users/:id")
    .get(function(req, res) {
        const user = userService.getSingleUser(req.params.id);
        res.json(user);
    })
    .put(function(req, res) {
        
    })
    .delete(function(req, res) {

    });

module.exports = app;

// app.listen(3000, function() {
//     console.log("we are now listening");
// })