'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name : "Kempegowda International Airport",
      cityId : 4,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : "Devi Ahilyabai Holkar International Airport",
      cityId : 9,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : "Sardar Vallabhai International Airport",
      cityId : 6,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : "Chaudhary Charan Singh International Airport",
      cityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : "Netaji Subhash Chandra Bose International Airport",
      cityId : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }
   ],{})
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
