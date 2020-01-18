module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        activity_name: DataTypes.STRING,
        rating: DataTypes.INTEGER
    });
    return Activity;
};
