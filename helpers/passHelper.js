const bcrypt = require('bcryptjs')

class PassHelper {
  static generatePassword (plain) {
    const salt = bcrypt.genSaltSync(+process.env.SALT)
    return bcrypt.hashSync(plain, salt)
  }

  static comparePassword (plain, hash) {
    return bcrypt.compareSync(plain, hash)
  }
}

module.exports = PassHelper