const express = require("express");
const path = require("path");

const app = express();

// app.get("/hello", function(req, res) {
//     res.sendFile(...)
// })

app.use("/assets", express.static(path.resolve(__dirname, "public")));

app.listen(3000, function() {
    console.log("listening...");
});