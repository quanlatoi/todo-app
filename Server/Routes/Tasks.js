const express = require('express')
const passport = require('passport')

const { jwtStrategy } = require('../Utils/jwt')
const { verifyJWT } = require('../Middlewares/Verify_Jwt')
const { getListTasks, createTask, createTab } = require('../Controllers/Task')

passport.use(jwtStrategy)

const router = express.Router()

/**
 * @route     GET api/tasks
 * Desc       get list tasks
 * Access     Private + protect
 */
router.get(
    '/', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    getListTasks
)
/**
 * @route     POST api/tasks/create-tab
 * Desc       create task
 * Access     Private + protect
 */
router.post(
    '/create-tab', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    createTab
)
/**
 * @route     POST api/tasks/create
 * Desc       create task
 * Access     Private + protect
 */
router.post(
    '/create', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    createTask
)

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router