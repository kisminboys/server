const { Teacher, Admin } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const findUser = await Promise.all([
      Teacher.findOne({ where: { email: req.loginUser.email }}),
      Admin.findOne({ where: { email: req.loginUser.email }})
    ])
    const result = findUser.filter(e => e.id)
    if(result.length) next()
    else throw {
      status: 401,
      message: `You aren't authorized`
    }
  } catch(err) {
    next(err)
  }
}