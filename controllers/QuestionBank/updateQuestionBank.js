const { QuestionBank } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const id = req.params.id
    const title = req.body.title
    const findOne = await Subject.findOne({where: {title}})
    if (findOne) {
      const SubjectId = findOne.id
      const objQuestion = {
        question: req.body.question,
        answers: req.body.answers,
        correctAnswer: req.body.correctAnswer,
        SubjectId
      }
      const data = await QuestionBank.update(objQuestion, {where: {id}, returning: true})
      if (data) {
        res.status(200).json(data[1][0])
      } else {
        throw {
          status: 404,
          message: 'error question not found'
        }
      }
    } else {
      throw {
        status: 404,
        message: 'error subject not found'
      }
    }
  } catch (error) {
    next(error)
  }
}