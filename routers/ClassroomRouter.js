const router = require('express').Router()
const ClassroomController = require('../controllers/ClassRoom')

router.post('/', ClassroomController.createClass)
router.get('/', ClassroomController.showClass)
router.get('/:id', ClassroomController.showById)
router.put('/:id', ClassroomController.editClass)
router.delete('/:id', ClassroomController.deleteClass)

module.exports = router