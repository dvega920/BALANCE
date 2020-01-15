module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Mood', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return Mood;
};
