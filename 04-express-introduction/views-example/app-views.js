

const express = require("express");
const path = require("path");
var exphbs  = require('express-handlebars');

const app = express();

app.engine("hbs", exphbs());
app.set('view engine', "hbs");
app.set("views", path.resolve(__dirname, "handlebars-templates"));



app.get("/", function(req, res) {
    // res.sendFile(path.resolve(__dirname, "hello.html"))
    res.render("hello", {name: "Yariv", layout: false});
});

app.listen(3000, function() {
    console.log("we are now listening");
})