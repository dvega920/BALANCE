module.exports = (sequelize, DataTypes) => {
    const Physician = sequelize.define('Physician', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        physician_email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
    });

    // Start Associate: 

    Physician.associate = function (models) {

        Physician.hasMany(models.Patient, {
            // or HasMany?
            // on what?
            // Example: 
            onDelete: "cascade"
            // onUpdate: 'cascade'


        });
    };
    return Physician;
};

