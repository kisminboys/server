const router = require('express').Router()
const ClassroomController = require('../controllers/ClassRoom')

router.post('/', ClassroomController.createClass)
router.get('/', ClassroomController.showClass)
router.get('/:className', ClassroomController.showById)
router.put('/:className', ClassroomController.editClass)
router.delete('/:className', ClassroomController.deleteClass)

module.exports = router