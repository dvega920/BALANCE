module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Moods', {
    emotion: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Mood;
};
