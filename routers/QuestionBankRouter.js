const router = require('express').Router()
const QuestionBankController = require('../controllers/QuestionBank')

router.post('/', QuestionBankController.create)
router.get('/', QuestionBankController.read)
router.get('/:id', QuestionBankController.get)
router.put('/:id', QuestionBankController.update)
router.delete('/:id', QuestionBankController.destroy)

module.exports = router