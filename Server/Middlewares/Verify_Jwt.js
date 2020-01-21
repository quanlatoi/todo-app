const passport = require('passport')

const { jwtStrategy } = require('../Utils/jwt')
const { userModel } = require('../Models');

passport.use(jwtStrategy)

module.exports.verifyJWT = async (req, res, next) => {
    try {
        const { id } = req.authInfo
        const userData = await userModel.findOne({ _id: id})
        if (userData) {
            res.local = userData
            return next();
        } else {
            return res.status(401).json({
                message: 'unauthorized'
            })
        }
    } catch(err) {
        if(err) {
            console.log('ERRORS \n', err)
            return res.status(500).json({
                message: 'errors'
            })
        }
    }
}