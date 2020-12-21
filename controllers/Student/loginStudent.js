const { Student } = require('../../models')
const { jwtHelper, passHelper } = require('../../helpers')

module.exports = async (req, res, next) => {
  try {
    const findStudent = await Student.findOne({ where: { email: req.body.email } })
    if (!findStudent) throw { status: 400, message: "Invalid account" }
    else if (passHelper.comparePassword(req.body.password, findStudent.password)) {
      const fullName = `${findStudent.firstName} ${findStudent.lastName}`
      res.status(200).json({access_token: jwtHelper.encode({ id: findStudent.id, email: findStudent.email, studentName: fullName })})
    }
    else throw { status: 400, message: "Invalid account" }
  } catch (error) {
    next(error);
  }
}