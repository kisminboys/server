const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll()
    res.status(200).json(teachers)
  } catch (error) {
    next(error)
  }
}