const { Student, Teacher, Classroom } = require('../../models')

module.exports = (req, res, next) => {
  let StudentId;
  let TeacherId;
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
      return Classroom.create({
        className: req.body.className,
        teacherRole: req.body.teacherRole,
        StudentId,
        TeacherId

      })
    }
    else {
      throw {
        status: 404,
        message: "Error! Data not found"
      }
    }
  })
  .then(classroom => {
    res.status(201).json(classroom)
  })
  .catch(err => {
    console.log(err + " <<<< ini dari createClassroom")
    next(err)
  })
}