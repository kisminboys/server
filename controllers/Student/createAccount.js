const { Student } = require('../../models')
const { sendEmail, passHelper } = require('../../helpers')

module.exports = async (req, res, next) => {
  const generatedPassword = passHelper.randomPassword()
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      photo: req.body.photo,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      batch: req.body.batch,
      password: generatedPassword
    }
    console.log('sampe');
    const newData = await Student.create(data, { validate: false})
    if (newData) {
      sendEmail(req.body.email, newData.email, generatedPassword)
      res.status(201).json({
        id: newData.id,
        firstName: newData.firstName,
        lastName: newData.lastName,
        address: newData.address,
        phoneNumber: newData.phoneNumber,
        gender: newData.gender,
        birthDate: newData.birthDate,
        activation: newData.activation,
        batch: newData.batch
      })
    }
  } catch (error) {
    next(error)
  }
}