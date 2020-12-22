const { Teacher, Classroom, Subject } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll({
      include: [ Classroom, Subject ]
    })
    res.status(200).json(teachers)
  } catch (error) {
    next(error)
  }
}