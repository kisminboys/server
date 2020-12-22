'use strict';
const { passHelper } = require('../helpers')
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
      Student.hasMany(models.Classroom)
    }

  };
  Student.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `First Name can't be empty` }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Last Name can't be empty` }
      }
    },
    fullName: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Address can't be empty` }
      }
    },
    email: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Phone Number can't be empty` }
      }
    },
    photo: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Gender can't be empty` }
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Birthdate can't be empty` }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Password can't be empty` }
      }
    },
    activation: DataTypes.STRING,
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: `Batch can't be empty` }
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });

  let getFullName

  Student.addHook('beforeCreate', student => {
    if (!student.fullName) {
      student.fullName = `${student.firstName} ${student.lastName}`
      getFullName = student.fullName
    }
  })

  Student.addHook('beforeCreate', student => {
    if (!student.activation) student.activation = 'Not Active'
  })

  Student.addHook('beforeCreate', student => {
    if (!student.password) student.password = passHelper.generatePassword(process.env.DEFAULT_STUDENT_PASS)
  })

  Student.addHook('beforeCreate', student => {
    if (!student.email) {
      let temp = ''
      for (let i = 0; i < getFullName.length; i++) {
        // console.log(temp);
        if (getFullName[i] === ' ') temp += '.'
        else if (getFullName[i - 5] === ' ') break
        else temp += getFullName[i]
      }
      // console.log(getFullName[0]);
      student.email = `${temp}${student.batch}@school.com`
    }
  })

  return Student;
};