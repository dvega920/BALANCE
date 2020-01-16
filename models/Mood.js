module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Mood = sequelize.define('mood', {
    mood_name: DataTypes.STRING,
    rating: DataTypes.INTEGER
=======
  const Mood = sequelize.define('Moods', {
    emotion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
>>>>>>> 6b49ba4349a6e735012e453334d17d18d969d477
  });
  return Mood;
};
