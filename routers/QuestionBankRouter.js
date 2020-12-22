const router = require('express').Router()
const { QuestionBank } = require('../controllers')
const { authorizationTeacherAdmin } = require('../middlewares')

router.use(authorizationTeacherAdmin)
router.post('/', QuestionBank.create)
router.get('/', QuestionBank.read)
router.get('/:id', QuestionBank.get)
router.put('/:id', QuestionBank.update)
router.delete('/:id', QuestionBank.destroy)

module.exports = router