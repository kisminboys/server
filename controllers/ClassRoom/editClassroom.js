const { Student, Teacher, Classroom } = require('../../models')

module.exports = (req, res, next) => {
  let StudentId;
  let TeacherId
  Student.findOne({
    where: {
      fullName: req.body.StudentFullName
    }
  })
  .then(student => {
    if (student) {
      StudentId = student.id
      return Teacher.findOne({
        where: {
          fullName: req.body.TeacherFullName
        }
      })
    }
    else {
      throw {
        status: 404,
        message: "Error! Data not found"
      }
    }
  })
  .then(teacher => {
    if (teacher) {
      TeacherId = teacher.id
      return Classroom.update({
        className: req.body.className,
        teacherRole: req.body.teacherRole,
        StudentId,
        TeacherId
      }, {
        where: {
          id: req.params.id
        },
        returning: true
      })
    }
    else {
      throw ({
        status: 404,
        message: 'Error! Data not found'
      })
    }
  })
  .then(classroom => {
    if (!classroom[1].length) {
      throw({
        status: 404,
        message: "Error! Data not found"
      })
    }
    else {
      res.status(200).json(classroom[1][0])
    }
  })
  .catch(err => {
    console.log(err + " <<< error dari edit classroom")
    next(err)
  })


}

/**
 * requirements:
 * req.body.className
 * req.body.teacherRole
 * req.body.TeacherFullName
 * req.body.StudentFullName
 * req.params.id
 */
