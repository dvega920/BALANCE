module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('mood', {
    mood_name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Mood;
};
