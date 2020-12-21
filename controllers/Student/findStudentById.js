const { Student } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const data = await Student.findOne({ where: { id: req.params.id } })
    res.status(200).json({ data })
  } catch (error) {
    next(error)
  }
}