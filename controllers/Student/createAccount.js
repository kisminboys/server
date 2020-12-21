const { sendEmail } = require('../../helpers')
const { Student } = require('../../models')
const { sendEmail } = require('../../helpers')

module.exports = async (req, res, next) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      photo: req.body.photo,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      password: req.body.password,
      activation: req.body.activation,
      batch: req.body.batch
    }
    const newData = await Student.create(data)
    if (newData) {
      sendEmail(req.body.email, newData.email, req.body.password)
    }
  } catch (error) {
    next(error)
  }
}