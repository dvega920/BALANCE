module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Mood', {
    mood_name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Mood;
};
