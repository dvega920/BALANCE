'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Patients', [
      {
        patient_name: "Johnny Appleseed",
        age: "18",
        patient_email:
          "email@email.com",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        patient_name: "Jimney Cricket",
        age: "80",
        patient_email:
          "email@email.com",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        patient_name: "Mary Poppins",
        age: "40",
        patient_email:
          "email@email.com",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
  }
};
