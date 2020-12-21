const { Student } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const data = {
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      photo: req.body.photo
    }
    const editedData = await Student.update(data, { where: { id: req.params.id } })
    res.status(200).json({
      address: editedData.address,
      phoneNumber: editedData.phoneNumber,
      photo: editedData.photo
    })
  } catch (error) {
    next(error)
  }
}