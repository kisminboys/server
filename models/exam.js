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
    }
  };
  Exam.init({
    schedule: DataTypes.DATEONLY,
    ClassroomId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    QuestionBankId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};