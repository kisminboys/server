const router = require('express').Router()
const { Subject } = require('../controllers')
const { authorizationAdmin } = require('../middlewares')

router.use(authorizationAdmin)
router.post('/', Subject.create)
router.get('/', Subject.read)
router.get('/:id', Subject.get)
router.put('/:id', Subject.update)
router.delete('/:id', Subject.destroy)

module.exports = router