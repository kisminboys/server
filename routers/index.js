const router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const StudentRouter = require('./StudentRouter')
const TeacherRouter = require('./TeacherRouter')
const { Login } = require('../controllers')

router.use('/admin', AdminRouter)
router.post('/login', Login)
router.use('/student', StudentRouter)
router.use('/teacher', TeacherRouter)

module.exports = router