module.exports = (sequelize, DataTypes) => {
    const Physician = sequelize.define('Physician', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        physician_email: DataTypes.STRING,
        phone: DataTypes.STRING
    });

    // Start Associate: 

    Physician.associate = function (models) {

        Physician.hasMany(models.Patient, {

            onDelete: "cascade"

        });
    };
    return Physician;
};

