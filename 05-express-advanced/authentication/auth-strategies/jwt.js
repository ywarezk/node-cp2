/**
 * configure passport to use jwt authentication
 */

const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;

// bunch of different ways to extract the jwt token from the request
// the most popular one is in the Authorization header: Bearer <token>
const ExtractJwt = require('passport-jwt').ExtractJwt;

const users = [
    {id: 1, email: "yariv@nerdeez.com", password: "12345"},
    {id: 2, email: "yariv1@nerdeez.com", password: "123456"},
    {id: 3, email: "yariv2@nerdeez.com", password: "123456"},
]

passport.use(new JwtStrategy({
    secretOrKey: process.env.JWT_SECRET || "secret",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()

    // {userId: 1}
}, function(payload, done) {
    const userId = payload.userId;
    const user = users.find((singleUser) => {
        return singleUser.id === userId;
    });
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
}))

// module.exports = {}