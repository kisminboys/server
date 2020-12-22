const { Teacher } = require('../../models')
const { passHelper } = require('../../helpers')

module.exports = async (req, res, next) => {
  const id = req.loginUser.id
  
  const payload = {
    oldPassword = req.body.oldPassword,
    newPassword = req.body.newPassword
  }

  try {
    const editTeacher = await Teacher.findByPk(id)
    
    if(editTeacher && passHelper.comparePassword(payload.oldPassword, editTeacher.password)){
      const updatedTeacher = await Teacher.update(
        {
          password: passHelper.generatePassword(payload.newPassword)
        },
        {
        where: {
          id
        }
      })
    }else throw { status: 400, message: 'invalid password'}
  } catch (error) {
    next(error)
  }
}