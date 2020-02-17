
const express = require("express");

// function that creates application
// Application defines how to deal with certain requests

// app: Application
// app can deal with certain requests
const app = express();

const checkpointAdminApp = require("./my-admin");

// /admin/user
// /admin/dashboard
// /admin/hello
app.use("/admin", checkpointAdminApp);

app.get("/world", function(req, res) {
    res.send("hello world")
})

// app.get("/world/:stam", checkpointAdminApp)

app.get("/foo", function(req, res) {
    res.send("hello world")
});



app.listen(3000, function() {
    console.log("we are now listening on port 3000");    
});


