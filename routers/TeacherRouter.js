const router = require('express').Router()
const { Teacher } = require('../controllers')

router.get('/', Teacher.read)
router.get('/:id', Teacher.find)
router.post('/', Teacher.create)
router.post('/login', Teacher.login)
router.put('/', Teacher.update)
router.patch('/', Teacher.resetPassword)
router.delete('/:id', Teacher.delete)



module.exports = router