'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    photo: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    password: DataTypes.STRING,
    activation: DataTypes.STRING,
    batch: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.addHook('beforeCreate', student => {
    if (!student.fullName) student.fullName = `${student.firstName} ${student.lastName}`
  })

  Student.addHook('beforeCreate', student => {
    if (!student.email) {
      let temp
      for (let i = 0; i < student.lastName.length; i++) {
        if (temp.length === 4) break
        else temp += student.lastName[i]
      }
      student.email = `${student.firstName}.${temp}@mail.com`
    }
  })

  return Student;
};