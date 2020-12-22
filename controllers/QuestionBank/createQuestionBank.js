const { Subject, QuestionBank } = require('../../models')

module.exports = async (req,res,next) => {
  try {
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
      const data = await QuestionBank.create(objQuestion)
      res.status(201).json(data)
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

/*
Reminder:

from req.body:
- title: string
- questiion : string
- answers : array(string)
- correctAnswer : string
*/