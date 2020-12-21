const router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const StudentRouter = require('./StudentRouter')

router.use('/admin', AdminRouter)
router.use('/student', StudentRouter)

module.exports = router