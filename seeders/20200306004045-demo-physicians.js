'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Physicians', [
      {
        physician_name: "Dr. Soandso",
        physician_email: "soandso@me.com",
        phone:
          "8675309",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        physician_name: "Dr. Samsa",
        physician_email: "email@email.com",
        phone:
          "8675555",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        physician_name: "Dr. Sleep",
        physician_email: "email@email.com",
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
