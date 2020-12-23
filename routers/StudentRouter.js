const router = require("express").Router();
const { Student } = require("../controllers");
const { authorizationAdmin } = require("../middlewares")

router.get('/:id', Student.findStudentById)
router.put('/', Student.editAccount)
router.patch('/', Student.resetPassword)

router.use(authorizationAdmin)
router.get('/', Student.getAllStudent)
router.post('/', Student.createAccount)
router.delete('/:id', Student.deleteAccount)

module.exports = router;
