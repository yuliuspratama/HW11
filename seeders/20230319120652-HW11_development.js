'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('HW11_developments',[
      {
        title:"Todo 1",
        status:"active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:"Todo 2",
        status:"active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:"Todo 3",
        status:"active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HW11_developments',null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
