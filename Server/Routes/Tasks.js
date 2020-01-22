const express = require('express')
const passport = require('passport')

const { jwtStrategy } = require('../Utils/jwt')
const { verifyJWT } = require('../Middlewares/Verify_Jwt')
const { getListTasks, createTask, updateTask, deleteTask } = require('../Controllers/Task')

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

/**
 * @route     PUT api/tasks/update
 * Desc       update task
 * Access     Private + protect
 */
router.put(
    '/update', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    updateTask
)

/**
 * @route     DELETE api/tasks/delete
 * Desc       delete task
 * Access     Private + protect
 */
router.delete(
    '/delete', 
    passport.authenticate('jwt', { session: false }),
    verifyJWT,
    deleteTask
)

module.exports = router