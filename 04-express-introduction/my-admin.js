

const express = require("express");



module.exports = function adminCreator(config) {
    const adminApp = express();

    adminApp.get("/user", function(req, res) {...})
    adminApp.get("/dashboar", function(req, res) {...})
}