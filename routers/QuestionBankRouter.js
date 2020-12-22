const router = require('express').Router()
const { QuestionBank } = require('../controllers')

router.post('/', QuestionBank.create)
router.get('/', QuestionBank.read)
router.get('/:id', QuestionBank.get)
router.put('/:id', QuestionBank.update)
router.delete('/:id', QuestionBank.destroy)

module.exports = router