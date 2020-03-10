// Questionnaire

module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Questions', {
        question: DataTypes.STRING,
        response: DataTypes.STRING,

    });
    return Questions;
};