const { Classroom, Subject, Exam } = require('../../models')

module.exports = async (req, res, next) => {
  try {
    const arrPromise = [
      Subject.findOne({ where: { title: req.body.title } }),
      Classroom.findOne({ where: { className: req.body.className }})
    ]
    const findData = await Promise.all(arrPromise)
    const data = findData.filter(e => e)
    if(data.length === findData.length) {
      const payload = {
        schedule: req.body.schedule,
        SubjectId: data[0].id,
        ClassroomId: data[1].id
      }
      const result = await Exam.update(payload, { where: { id: +req.params.id }})
      res.status(200).json(result)
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
 * req.params.id
 */