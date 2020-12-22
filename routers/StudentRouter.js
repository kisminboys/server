const router = require("express").Router();
const { Student } = require("../controllers");

router.get('/', Student.getAllStudent)
// router.post('/create', Student.createAccount)
router.put('/reset', Student.resetPassword)
router.get('/:id', Student.findStudentById)

module.exports = router;
