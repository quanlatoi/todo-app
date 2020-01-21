const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

function signJWT(body, option = {algorithm: 'RS256'}) {
    const token = jwt.sign(body, 'secretkey', option);
    return token || null
}

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey: 'secretkey'
}

const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
    return done(null, true, jwt_payload)
})

module.exports = {
    signJWT,
    jwtStrategy
}