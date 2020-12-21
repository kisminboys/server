const { Subject } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const id = req.params.id
    const objSubject = {
      title : req.body.title
    }
    const data = await Subject.update({title: objSubject.title}, {where: {id}, returning: true})
    if (data) {
      res.status(200).json(data[1][0])
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