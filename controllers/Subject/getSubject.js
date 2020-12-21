const { Subject } = require('../../models')

module.exports = async (req,res,next) => {
  try {
    const id = req.params.id
    const data = await Subject.findOne({where: {id}})
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