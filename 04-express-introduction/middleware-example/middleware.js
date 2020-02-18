/**
 * Middleware
 * handles an incoming request
 * middleware deals with requests according to their type and path
 * deals:
 *   - response
 *   - pass to next middleware
 *   - return error
 */

const express = require("express");

const app = express();


// middleware creator

// function json(configs) {
//     return function(req, res, next) {

//     }
// }

// req.body => {id: 1, title: 'hello'}
// {}
// urlencoded id=1&title=hello
// id=1;title=hello
// Content-Type === application/json
app.use(express.json());

// function amitJwt(req, res, next) {

//     res.send("hello");
// }

app.get("/", 
    [function(req, res, next) {
        next()
    },
    function(req, res, next) {
        next()
    },
    function(req, res, next) {
        res.send("hello");
    }],
    function(req, res) {

    }
);

app.get("/", function(req, res) {
    res.send('hello')
})

// app.use("/api", amitJwt);

app.get("/", function(req, res, next) {
    //  amit(req, res, next);
    // next();
    // next('route')
    // next(new Error())

    // for sync exception
    setTimeout(() => {
        try {
            const doesNotExist = req.hello.foo;
        } catch(err) {
            next(err);
            return;
        }
        
        res.send("hello");
    }, 1000);    
});

// app.use("/", adminApp);

// app.get("/*", function(req, res) {

// });



// app.all(/^\/[a-z]*/, function(req, res) {

// });


app.get("/user/:id", function(req, res) {
    // {}
    const id = req.params.id;
    const a = req.query.a;
    res.send(`hello user id: ${id} with query: ${a}`)
});


// /
// /foo
// /foo/bar
app.use("/", function(req, res, next) {

});

app.all("/", function(req, res, next) {

})

// app.get("/", );

const server = app.listen(3000, function() {
    console.log("we are now listening on port 3000");
})

