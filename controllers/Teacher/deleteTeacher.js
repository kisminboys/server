const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  const id = req.params.id

  try {
    const findTeacher = await Teacher.findByPk(id)

    if(findTeacher){
      const deleteTeacher = await Teacher.destroy({
        where: { id } 
      })
      res.status(200).json({ message: 'teacher delete'})
    }else throw { status: 404, message: 'teacher not found, cant be deleted'}
  } catch (error) {
    next(error)
  }
}