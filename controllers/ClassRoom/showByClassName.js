const { Classroom } = require('../../models')

module.exports = (req, res, next) => {
  Classroom.findAll({
    where: {
      className: req.params.className
    }
  }, { include: { all: true } })
  .then(classroom => {
    if (classroom) {
      res.status(200).json(classroom)
    }
    else {
      throw {
        status: 404,
        message: "Error! Data not found"
      }
    }
  })
  .catch(err => {
    console.log(err + " <<< error dari show by id classroom")
    next(err)
  })
}