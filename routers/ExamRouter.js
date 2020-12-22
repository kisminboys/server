const router = require('express').Router()
const ExamController = require('../controllers/Exam')
const { authorizationTeacherAdmin } = require('../middlewares')

router.use(authorizationTeacherAdmin)
router.post('/', ExamController.createExam)
router.get('/', ExamController.getAllExam)
router.get('/:id', ExamController.findExamById)
router.put('/:id', ExamController.updateExam)
router.delete('/:id', ExamController.deleteExam)

module.exports = router