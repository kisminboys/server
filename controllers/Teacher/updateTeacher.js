const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  const payload = {
    address: req.body.address,
    photo: req.body.photo,
    phoneNumber: req.body.phoneNumber,
    SubjectId: req.body.subjectId,
    ClassroomId: req.body.classroomId
  }

  try {
    const updatedTeacher = await Teacher.update(payload, {
      where: {
        id: req.loginUser.id
      },
      returning: true
    })
    res.status(200).json(updatedTeacher)
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