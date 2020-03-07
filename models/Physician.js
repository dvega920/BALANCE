module.exports = (sequelize, DataTypes) => {
    const Physician = sequelize.define('Physician', {
        physician_name: DataTypes.STRING,
        physician_email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
    });

    // Start Associate: 

    Physician.associate = function (models) {

        Physician.HasOne(models.Patient, {
            // or HasMany?
            // on what?
            // Example: 
            // onDelete: "cascade",
            // onUpdate: 'cascade'


        });
    };
    return Physician;
};

