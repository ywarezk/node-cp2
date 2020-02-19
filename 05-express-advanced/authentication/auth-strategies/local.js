/**
 * We will configure passport to use email password authentication
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const users = [
    {id: 1, email: "yariv@nerdeez.com", password: "12345"},
    {id: 2, email: "yariv1@nerdeez.com", password: "123456"},
    {id: 3, email: "yariv2@nerdeez.com", password: "123456"},
]

passport.use(new LocalStrategy(function(username, password, done) {
    // user = query database to grab the user with this username
    // bcrypt.compare(password, user.password)

    const user = users.find((user) => {
        return user.email === username;
    });
    if (user && user.password === password) {
        // req.user
        done(null, user);
    } else {
        // for error we sending instead of null the error object we have
        done(null, false);
    }
}));
