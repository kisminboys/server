'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exam.belongsTo(models.Classroom)
      Exam.belongsTo(models.Subject)
      Exam.belongsTo(models.QuestionBank)
    }
  };
  Exam.init({
    schedule: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Schedule should not be empty!"
        },
        notNull: {
          msg: "Schedule should not be empty"
        },
        isAfterDate(value){
          if (value){
            let dateNow = new Date().toISOString()
            if (dateNow.split("T")[0] > value){
              throw new Error("Schedule should be greater than today")
            }
          }
        }
      }
    },
    ClassroomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Classroom ID should not be empty!"
        },
        notNull: {
          msg: "Classroom ID should not be empty"
        },
      }
    },
    SubjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Subject ID should not be empty!"
        },
        notNull: {
          msg: "Subject ID should not be empty"
        },
      }
    },
    QuestionBankId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "QuestionBank ID should not be empty!"
        },
        notNull: {
          msg: "QuestionBank ID should not be empty"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};