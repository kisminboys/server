const router = require('express').Router()
const { Teacher } = require('../controllers')
const { authorizationAdmin } = require('../middlewares')

router.get('/:id', Teacher.find)
router.post('/login', Teacher.login)
router.put('/', Teacher.update)
router.patch('/', Teacher.resetPassword)

router.use(authorizationAdmin)
router.get('/', Teacher.read)
router.post('/', Teacher.create)
router.delete('/:id', Teacher.delete)



module.exports = router