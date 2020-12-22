const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  const id = req.loginUser.id

  try {
    const findTeacher = await Teacher.findByPk(id)

    if(findTeacher){
      const deleteTeacher = await Teacher.destroy({
        where: { id } 
      })
    }else throw { status: 404, message: 'teacher not found, cant be deleted'}
  } catch (error) {
    next(error)
  }
}