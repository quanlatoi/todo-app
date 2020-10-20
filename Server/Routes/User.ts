import express from 'express'
import passport from 'passport'

const { getDetail } = require('../Controllers/User')
const { usePassport } = require('../Utils/jwt')
const { verifyJWT } = require('../Middlewares/Verify_Jwt')

usePassport();

const router = express.Router()

/**
 * @route     POST api/user/detail-user
 * Desc       get detail user
 * Access     Private + protect
 */
router.get(
    '/detail-user', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    getDetail
)

router.get('/', (req, res) => res.send({ message: 'user api' }))
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router