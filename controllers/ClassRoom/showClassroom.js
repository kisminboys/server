const { Classroom } = require('../../models')

module.exports = (req, res, next) => {
  Classroom.findAll()
    .then(classrooms => {
      res.status(200).json(classrooms)
    })
    .catch(err => {
      console.log(err + " <<< ini dari showClassroom")
      next(err)
    })
}