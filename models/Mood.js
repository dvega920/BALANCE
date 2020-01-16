module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Mood', {
    emotion: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  return Mood;
};
