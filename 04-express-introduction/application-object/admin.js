/**
 * the admin requests should be handled here
 * Router / Application
 */

const express = require("express");

const app = express();

// /admin/admin
app.get("/user", function(req, res) {
    res.send("user dashboard");
});

app.get("/todo", function(req, res) {
    res.send("todo dashboard");
});

app.get("/tags", function(req, res) {
    res.send("tags dashboard");
});

module.exports = app

