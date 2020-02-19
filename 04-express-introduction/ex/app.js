/**
 * create our users rest server
 */

const express = require('express');
const userService = require("./services/user.service");
const User = require("./models/user.model")

const app = express();

app.use(express.json());

/**
 * Rest Conventions:
 * 
 * - For reading all the users:
 * GET request to /api/users
 * The status we are sending is 200
 * 
 * - For creating a new user
 * POST request tp /api/users
 * The request body needs to be filled with the items needed to create the new row
 * The Response we send is 201
 * 
 * - For bulk insert
 * Patch request to /api/users
 * The request body needs to hold an array  with all the items we are adding
 * we send a status of 202
 */
app.route("/api/users")
    // get all users
    .get(function(req, res) {
        const users = userService.getUsers();
        // res.send("put text")
        
        // res.send
        res.status(200).json(users);
    })

    // insert a single user
    .post(function(req, res) {
        const userJson = req.body;
        const user = new User(userJson)
        userService.addUser(user);
        res.status(201).json(user);
    })

    // bulk insert
    .patch(function(req, res) {
        
    })

/**
 * REST Conventions:
 * 
 * - For reading a single user
 * GET Request to /api/users/:id where id is usually the primary key in the db table
 * The response is status 200
 * 
 * - For deleting a user
 * Delete request to /api/users/:id where id is usually the primary key in the db table
 * The response is status 204 with no content
 * 
 * Remark: Some REST servers prefer to following conventions which is also fine.
 * Whatever you choose just stick with it in all the urls
 * This convention distinguish between api for all users and api for a single user.
 * in this convention you will have: /api/users and /api/user/:id (notice the plural)
 * 
 * - For updating a user
 * The formal REST convention is the following:
 * We distinguish between partial update and full update.
 * partial update we place only the fields we want to update
 * for full update we need to pass all the fields
 * the response needs to return the user and send a response status of 202
 * 
 * 
 */
app.route("/api/users/:id")
    // get a single user
    .get(function(req, res) {
        const user = userService.getSingleUser(req.params.id);
        res.json(user);
    })

    // update a single user
    .patch(function(req, res) {
        
    })
    .put()
    .delete(function(req, res) {

    });

module.exports = app;

// app.listen(3000, function() {
//     console.log("we are now listening");
// })