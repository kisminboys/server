const { Teacher, Subject, Classroom } = require('../../models')

module.exports = async (req, res, next) => {
  const id = req.params.id
  try {
    const findTeacher = await Teacher.findByPk(id, {
      include: [ Subject, Classroom ]
    })
    if(findTeacher){
      res.status(200).json(findTeacher)
    }else{
      throw {status: 404, message: 'teacher not found'} 
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
}