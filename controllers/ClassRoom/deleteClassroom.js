const { Classroom } = require('../../models')

module.exports = (req, res, next) => {
  Classroom.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(classroom => {
    if (classroom === 0) {
      throw {
        status: 404,
        message: 'Error! Data not found'
      }
    }
    else {
      res.status(200).json({message: "Successfully delete classroom"})
    }
  })
  .catch(err => {
    next(err)
  })
}

/**
 * requirements:
 * req.params.id
 */