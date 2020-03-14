'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Physicians', [
      {
        firstName: "Patrick",
        lastName: "McDreamy",
        physician_email: "mcdreamy@me.com",
        phone:
          "603-867-5309",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: "Gregor",
        lastName: "Samsa",
        physician_email: "gregorsamsa@email.com",
        phone:
          "9788675555",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: "Danny",
        lastName: "Sleep",
        physician_email: "dannysleep@myemail.com",
        phone:
          "5629995555",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Physicians', null, {});
  }
};
