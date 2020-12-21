'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATEONLY
      },
      password: {
        type: Sequelize.STRING
      },
      // ClassroomId: {
      //   type: Sequelize.INTEGER
      // },
      SubjectId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Teachers');
  }
};