const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  const payload = {
    address: req.body.address,
    photo: req.body.photo,
    phoneNumber: req.body.phoneNumber
  }

  try {
    const updatedTeacher = await Teacher.update(payload, {
      where: {
        id: req.loginUser.id
      }
    })

  } catch (error) {
    next(error)
  }
}

/**
 * requirement
 * req.body.address
 * req.body.photo
 * req.body.phoneNumber
 */