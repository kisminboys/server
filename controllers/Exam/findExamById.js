const { Exam, Classroom, Subject } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const data = Exam.findByPk(req.params.id, { include: [Classroom, Subject] })
    res.status(200).json(data)
  }catch(err) {
    next(err)
  }
}

/**
 * requirement
 * req.params.id
 */