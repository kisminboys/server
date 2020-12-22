const { Student } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const data = await Student.findAll({ order: [['id', 'ASC']] })
    res.status(200).json({ data })
  } catch (error) {
    next(error)
  }
}