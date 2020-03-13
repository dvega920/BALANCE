const express = require('express');
const db = require('./models');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the Vue app build directory
app.use(express.static(path.join(__dirname, 'client/dist')));

app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ /* force: true */ }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
