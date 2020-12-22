const { Student } = require('../../models')
const { passHelper } = require('../../helpers')

module.exports = async (req, res, next) => {
  try {
    const findStudent = await Student.findOne({ where: { id: req.loginUser.id } })
    const oldPassword = passHelper.comparePassword(req.body.oldPassword, findStudent.password)
    if (!oldPassword) throw { status: 400, message: 'Wrong password' }
    else {
      const changePassword = { password: passHelper.generatePassword(req.body.newPassword), activation: 'Active' }
      await Student.update(changePassword, { where: { email: findStudent.email } })
      res.status(200).json({ message: 'Password changed!' })
    }
  } catch (error) {
    next(error)
  }
}