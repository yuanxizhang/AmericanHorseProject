const passport = require('passport'),
JwtStrategy = require('passport-jwt').Strategy,
User = require('../../db/models/Users'),
ExtractJwt = require('passport-jwt').ExtractJwt;
const JWT_SECRET = require('../../process.env').JWT_SECRET;
require('dotenv').config();

let jwtOptions = {
    jwtFromRequest: (req) => {
        return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderAsBearerToken('jwt')(req);
    },
    secretOrKey: JWT_SECRET
};

passport.use(
    'jwt', 
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
        if (Date.now() > jwtPayload.expires) {
            return done(null, false, { message: 'jwt expired' });
        }
        let { iat, exp, ...userData } = jwtPayload;
        userData = await User.findById(userData._id);
        return done(null, userData);
    })
);
  
module.exports = passport;