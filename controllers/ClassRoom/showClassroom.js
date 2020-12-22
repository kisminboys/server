const { Classroom } = require('../../models')

module.exports = (req, res, next) => {
  Classroom.findAll({
    include: { all: true }
  })
    .then(classrooms => {
      res.status(200).json(classrooms)
    })
    .catch(err => {
      console.log(err + " <<< ini dari showClassroom")
      next(err)
    })
}