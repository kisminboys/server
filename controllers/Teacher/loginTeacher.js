const { Teacher } = require('../../models')
const { passHelper, jwtHelper } = require('../../helpers')

module.exports = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  }

  try {
    const findTeacher = await Teacher.findOne({ 
      where : {
        email: payload.email
      }
    })

    if(!findTeacher){
      throw { status: 400, message: 'invalid account'}
    }else {
      if(passHelper.comparePassword(payload.password, findTeacher.password)){
        res.status(200).json({ access_token: jwtHelper.encode({
           id: findTeacher.id, 
           email: findTeacher.email
          })
        })
      }else{
        throw { status: 400, message: 'invalid account'}
      }
    }
  } catch (error) {
    next(error)  
  }
}