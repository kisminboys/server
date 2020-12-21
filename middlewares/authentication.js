const { Teacher, Student, Admin } = require('../models')
const { jwtHelper } = require('../helpers')

module.exports = async(req, res, next) => {
  try {
    const { access_token } = req.headers
    if(access_token) {
      const decoded = jwtHelper.decode(access_token)
      const arrPromises = [
        Teacher.findOne({ where: { id: decoded.id }}),
        Student.findOne({ where: { id: decoded.id }}),
        Admin.findOne({ where: { id: decoded.id }})
      ]
      const findUser = await Promise.all(arrPromises)
      const result = findUser.filter(e => e.id)
      if(result.length) {
        req.loginUser = decoded
        next()
      } else {
        throw {
          status: 401,
          message: 'Please Login First !'
        }
      }
    } else {
      throw {
        status: 401,
        message: 'Please Login First !'
      }
    }
  }catch(err) {
    next(err)
  }
}