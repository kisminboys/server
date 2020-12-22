const router = require('express').Router()
const { Subject } = require('../controllers')

router.post('/', Subject.create)
router.get('/', Subject.read)
router.get('/:id', Subject.get)
router.put('/:id', Subject.update)
router.delete('/:id', Subject.destroy)

module.exports = router