'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Classroom)
      Teacher.belongsTo(models.Subject)      
    }
  };
  Teacher.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `First Name can't be empty`},
        notNull: { msg: `First Name can't be empty`}
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Last Name can't be empty`},
        notNull: { msg: `Last Name can't be empty`}
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Full Name can't be empty`},
        notNull: { msg: `Full Name can't be empty`}
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Address can't be empty`},
        notNull: { msg: `Address can't be empty`}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `E'mail can't be empty`},
        notNull: { msg: `E'mail can't be empty`},
        isEmail: { msg: `E'mail must be formatted in example@mail.com`}
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Phone number can't be empty`},
        notNull: { msg: `Phone number can't be empty`},
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Photo can't be empty`},
        notNull: { msg: `Photo can't be empty`},
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Gender can't be empty`},
        notNull: { msg: `Gender can't be empty`},
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Birth Date can't be empty`},
        notNull: { msg: `Birth Date can't be empty`},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Password can't be empty`},
        notNull: { msg: `Password can't be empty`},
        len: { args: [7], msg: `Password must be contain minimum 7 characters`}
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};