module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const Mood = sequelize.define('Moods', {
    emotion: DataTypes.STRING,
=======
  const Mood = sequelize.define('Mood', {
    mood_name: DataTypes.STRING,
>>>>>>> 91407186939f37dc4c69b1a6c9a574e9deca215b
=======
  const Mood = sequelize.define('Mood', {
    mood_name: DataTypes.STRING,
>>>>>>> ca0afb29b64ac597484efb1cb054ebaef7abc299
    rating: DataTypes.INTEGER
  });
  return Mood;
};
