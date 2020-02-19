const express = require("express");
var cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://localhost:8080"
}));

app.post("/api/send-me-money", function(req, res) {
    res.send("transfered all the money");
})

app.listen(3000, function() {
    console.log("listening...");
});