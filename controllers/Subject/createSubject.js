const { Subject } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const objSubject = {
      title : req.body.title
    }
    const data = await Subject.create(objSubject)
    res.status(201).json(data)
  } catch (error) {
    next(error)
  }
}