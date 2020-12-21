module.exports = (err, req, res, next) => {
  if(err.status){
    res.status(err.status).json({message: err.message})
  }
  else if(err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError"){
    let errors = []
    for(let i = 0; i < err.errors.length; i++){
      errors.push(err.errors[i].message)
    }
    res.status(400).json({message: errors})
  }
  else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({message: "Failed to authenticate"})
  }
  else {
    res.status(500).json({message: "Internal Server Error"})
  }
}