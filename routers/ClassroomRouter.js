const router = require('express').Router()
const { ClassRoom } = require('../controllers')

router.post('/', ClassRoom.createClass)
router.get('/', ClassRoom.showClass)
router.get('/:className', ClassRoom.showById)
router.put('/:className', ClassRoom.editClass)
router.delete('/:className', ClassRoom.deleteClass)

module.exports = router