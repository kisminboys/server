const { Classroom, Subject, Exam } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const arrPromise = [
      Subject.findOne({ where: { title: req.body.title } }),
      Classroom.findOne({ where: { className: req.body.className }})
    ]
    const findData = await Promise.all(arrPromise)
    const data = findData.filter(e => e.id)
    if(data.length === findData.length) {
      const payload = {
        schedule: req.body.schedule,
        SubjectId: data[0].id,
        ClassroomId: data[1].id
      }
      const result = await Exam.create(payload)
      res.status(201).json(result)
    }else {
      next(err)
    }
  }catch(err) {
    next(err)
  }
}

/**
 * requirement
 * req.body.title
 * req.body.className
 * req.body.schedule
 */