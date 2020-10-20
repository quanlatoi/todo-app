import passport from 'passport'

const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

interface BodySignJWT {
    username?: string;
    id?: string;
}

function signJWT(body: BodySignJWT, option = {algorithm: 'RS256'}) {
    const token = jwt.sign(body, 'secretkey', option);
    return token || null
}

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey: 'secretkey'
}


function usePassport():void {
    const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
        return done(null, true, jwt_payload)
    })
    return passport.use(jwtStrategy)
}

module.exports = {
    signJWT,
    usePassport
}