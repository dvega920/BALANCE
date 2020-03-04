module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Moods', {
    emotion: DataTypes.STRING,
  })
  return Mood;
};
