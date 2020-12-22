const { Teacher } = require('../../models')
const { sendEmail } = require('../../helpers')

module.exports = async (req, res, next) => {
  const payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    photo: req.body.photo,
    gender: req.body.gender,
    birthDate: req.body.birthDate
  }

  try {
    const newTeacher = await Teacher.create(payload, { validate: false })
    if(newTeacher) {
      sendEmail(req.body.email, newTeacher.email, newTeacher.password)
      res.status(201).json(newTeacher)
    }    
  } catch (error) {
    next(error)
  }
}

/**
 * requirement
 * req.body.firstName
 * req.body.lastName
 * req.body.address
 * req.body.phoneNumber
 * req.body.photo
 * req.body.gender
 * req.body.birthDate
 * req.body.email
 */