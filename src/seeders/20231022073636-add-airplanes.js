'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Airplanes', [
        {
        modelNumber : 'Boeing 737',
        capacity : 700,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A320",
        capacity : 750,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 727",
        capacity : 550,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 747",
        capacity : 600,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 777",
        capacity : 650,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
