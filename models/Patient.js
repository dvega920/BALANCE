module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patient_name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        patient_email: DataTypes.STRING,
        // physcian_id: 
    });

    // Start Associate: 

    Patient.associate = function (models) {

        Patient.belongsTo(models.Physician, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Patient;
};

// Relationship sequelize 
// Day 3 sequelize - week 14
// Standard relationship

