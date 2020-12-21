'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classroom.belongsTo(models.Student)
      Classroom.belongsTo(models.Teacher)
    }
  };
  Classroom.init({
    className: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'class name can not be empty'
        }
      }
    },
    teacherRole: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'role can not be empty'
        }
      }
    },
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};