const router = require("express").Router();
const { Student } = require("../controllers");

router.get('/data', Student.getAllStudent)
router.post('/create', Student.createAccount);
router.put('/reset', Student.resetPassword);

module.exports = router;
