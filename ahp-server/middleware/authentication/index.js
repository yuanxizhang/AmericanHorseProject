const passport = require('passport'),
JwtStrategy = require('passport-jwt').Strategy,
User = require('../../db/models/Users'),
ExtractJwt = require('passport-jwt').ExtractJwt;
const JWT_SECRET = process.env.JWT_SECRET;

let jwtOptions = {
  jwtFromRequest: (req) => {
      console.log(req.body);
        return req?.cookies?.jwt || 
        // ExtractJwt.fromAuthHeaderAsBearerToken('jwt')(req);
        ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
    },
    secretOrKey: JWT_SECRET
};

passport.use(
    'jwt', 
    new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
      console.log('Payload: ', jwtPayload)
        if (Date.now() > jwtPayload.expires) {
            return done(null, false, { message: 'jwt expired' });
        }
        let { iat, exp, ...userData } = jwtPayload;
        userData = await User.findById(userData._id);
        return done(null, userData);
    })
);  
module.exports = passport;