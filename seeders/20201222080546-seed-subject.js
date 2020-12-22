'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Subjects', [
      {
        title: 'biologi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'matematika',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'aljabar linier',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'english',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'kimia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'bahasa arab',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'bahasa mongol',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Subjects', null, {});
  }
};
