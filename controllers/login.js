const { Teacher, Student } = require('../models')
const { passHelper, jwtHelper } = require('../helpers')

module.exports = async ( req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  }
  console.log(payload);
  try {
    const findUser = [
      Teacher.findOne({ where: {email: payload.email}}),
      Student.findOne({ where: {email: payload.email}}),
    ]

    const results = await Promise.all(findUser)

    const user = results.filter(e => e)

    if(user.length && passHelper.comparePassword(payload.password, user[0].password)){
      res.status(200).json({ 
        access_token: jwtHelper.encode({id: user[0].id, email: user[0].email}),
        fullname: user[0].fullName
      })
    }else {
      throw { status: 400, message: 'invalid email/password'}
    }
  } catch (error) {
    next(error)
  }
}

/**
 * requirement
 * req.body.email,
 * req.body.password
 */