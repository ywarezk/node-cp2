/**
 * Test file for our server
 */

const userService = require("../services/user.service");
const app = require("../app");
const axios = require("axios");
const assert = require('assert');


describe("we are testing our users REST API", function() {
    let server;

    /**
     * i want to clear the users table before each test
     */
    beforeEach(function() {
        userService.users = [];
    });

    /**
     * create our server
     */
    before(function(done) {
        server = app.listen(3001, function() {
            console.log("we are ready for the tests");
            done();
        })
    });

    // close the server
    after(function() {
        server.close();
    })

    it("GET", async function() {
        console.log("hello");
        const response = await axios.get("http://localhost:3001/api/users");
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.length, 0);
    });

    it("POST", async function() {
        let response = await axios.post("http://localhost:3001/api/users", {
            id: 1,
            firstName: "Yariv",
            lastName: "Katz"
        });
        assert.strictEqual(response.status, 201);
        assert.strictEqual(response.data.id, 1);
        response = await axios.get("http://localhost:3001/api/users");
        assert.strictEqual(response.data.length, 1);
    });
})