/**
 * this is the entry point for our server
 * will take the Application and call listen to create a server
 */

const app = require("../app");

app.listen(3000, function() {
    console.log("we are now listening");
});