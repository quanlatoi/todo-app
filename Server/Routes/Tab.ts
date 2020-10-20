import passport from 'passport'

const express = require('express')

const { usePassport } = require('../Utils/jwt')
const { verifyJWT } = require('../Middlewares/Verify_Jwt')
const { createTab, updateTab, getListTab, deleteTab } = require('../Controllers/Tab')

// passport.use(jwtStrategy)
usePassport()

const router = express.Router()

/**
 * @route     GET api/tabs
 * Desc       get list task
 * Access     Private + protect
 */
router.get(
    '/', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    getListTab
)

/**
 * @route     POST api/tabs/create
 * Desc       create tab
 * Access     Private + protect
 */
router.post(
    '/create', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    createTab
)

/**
 * @route     PUT api/tabs/update
 * Desc       update tab
 * Access     Private + protect
 */
router.put(
    '/update',
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    updateTab
)

/**
 * @route     DELETE api/tabs/create-tab
 * Desc       delete tab
 * Access     Private + protect
 */
router.delete(
    '/delete', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    deleteTab
)


module.exports = router
