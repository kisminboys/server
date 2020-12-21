const router = require('express').Router()
const AdminRouter = require('./AdminRouter')

router.use('/admin', AdminRouter)

module.exports = router