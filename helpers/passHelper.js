const bcrypt = require('bcryptjs')

class PassHelper {
  static generatePassword (plain) {
    const salt = bcrypt.genSaltSync(+process.env.SALT)
    return bcrypt.hashSync(plain, salt)
  }

  static comparePassword (plain, hash) {
    return bcrypt.compareSync(plain, hash)
  }

  static randomPassword () {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

module.exports = PassHelper