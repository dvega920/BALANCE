const express = require('express');
const db = require('./models');
const routes = require('./routes');

// creating an express instance
const app = express();
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json())

app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', routes);

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
