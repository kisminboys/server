const { Student } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.id } })
    res.status(200).json({ message: 'Account deleted' })
  } catch (error) {
    next(error)
  }
}