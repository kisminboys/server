'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionBank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionBank.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Can not be empty'
        }
      }
    },
    answers: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionBank',
  });
  return QuestionBank;
};