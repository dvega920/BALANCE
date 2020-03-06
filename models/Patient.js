module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patient_name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        patient_email: DataTypes.STRING,
    });
    return Patient;
};