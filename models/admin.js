'use strict';
const {
  Model
} = require('sequelize');
const { passHelper } = require('../helpers')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        unique: true,
        isEmail: {
          args: true,
          msg: "must be an email"
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (admin) =>{
        admin.password = passHelper.generatePassword(admin.password)
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};