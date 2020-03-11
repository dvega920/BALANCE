'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        question: "Do you experience little interest in pleasure in doing things?",
        response: "Some days",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
        response: "More than half the time",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
        response: "Most of the time",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
