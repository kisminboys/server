const { QuestionBank } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const id = req.params.id
    const data = await QuestionBank.destroy({where: {id}})
    if (data) {
      res.status(200).json({message: 'the question has been deleted'})
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