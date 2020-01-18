module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Mood = sequelize.define('Moods', {
    emotion: DataTypes.STRING,
=======
  const Mood = sequelize.define('Mood', {
    mood_name: DataTypes.STRING,
>>>>>>> e4ed8be94bb75e4759c1db1a2c4077ad717b2230
    rating: DataTypes.INTEGER
  });
  return Mood;
};
