'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.hasMany(models.Teacher)
      Subject.hasMany(models.Exam)
      Subject.hasMany(models.QuestionBank)
    }
  };
  Subject.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};