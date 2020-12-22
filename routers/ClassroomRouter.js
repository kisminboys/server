const router = require('express').Router()
const { ClassRoom } = require('../controllers')
const { authorizationAdmin } = require('../middlewares')

router.use(authorizationAdmin)
router.post('/', ClassRoom.createClass)
router.get('/', ClassRoom.showClass)
router.get('/:className', ClassRoom.showByClassName)
router.put('/:className', ClassRoom.editClass)
router.delete('/:className', ClassRoom.deleteClass)

module.exports = router