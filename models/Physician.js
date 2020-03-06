module.exports = (sequelize, DataTypes) => {
    const Physician = sequelize.define('Physician', {
        physician_name: DataTypes.STRING,
        physician_email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
    });
    return Physician;
};