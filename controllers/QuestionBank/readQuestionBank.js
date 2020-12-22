const { QuestionBank } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const data = await QuestionBank.findAll({order: [['id', 'ASC']]})
    if (data) {
      res.status(200).json(data)
    } else {
      throw {
        status: 404,
        message: 'error not found'
      }
    }
  } catch (error) {
    next(error)
  }
}