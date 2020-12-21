const router = require('express').Router()
const { Admin } = require('../controllers')

router.post('/login', Admin.login)


module.exports = router