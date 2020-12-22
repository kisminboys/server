const router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const StudentRouter = require('./StudentRouter')
const TeacherRouter = require('./TeacherRouter')

router.use('/admin', AdminRouter)
router.use('/student', StudentRouter)
router.use('/teacher', TeacherRouter)

module.exports = router