'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Physicians', [
      {
        firstName: "Dr. Soandso",
        lastName: "Dr. Soandso",
        physicianEmail: "soandso@me.com",
        phone:
          "8675309",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: "Dr. Samsa",
        lastName: "Dr. Samsa",
        physicianEmail: "email@email.com",
        phone:
          "8675555",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: "Dr. Sleep",
        lastName: "Dr. Sleep",
        physicianEmail: "email@email.com",
        phone:
          "9995555",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Physicians', null, {});
  }
};
