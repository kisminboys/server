const { Exam } = require('../../models')

module.exports = async(req, res, next) => {
  try {
    const result = await Exam.destroy({ where: { id: +req.params.id }})
    res.status(200).json({ message: `Successfully deleted this exam`})
  }catch(err) {
    next(err)
  }
}

/**
 * requirement
 * req.params.id
 */