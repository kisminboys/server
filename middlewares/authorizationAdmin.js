const { Admin } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const findUser = await Admin.findOne({ where: { email: req.loginUser.email }})
    if(findUser) next()
    else throw {
      status: 401,
      message: `You aren't authorized`
    }
  } catch(err) {
    next(err)
  }
}