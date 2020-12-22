const { Teacher } = require('../../models')

module.exports = async (req, res, next) => {
  const payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    photo: req.body.photo,
    phoneNumber: req.body.phoneNumber,
    SubjectId: req.body.SubjectId,
    ClassroomId: req.body.classroomId
  }

  try {
    const updatedTeacher = await Teacher.update(payload, {
      where: {
        id: req.body.id
      },
      returning: true,
      individualHooks: true
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
 * req.body.classroomId
 * req.body.subjectId
 */