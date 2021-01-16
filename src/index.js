const startServer = require('./server');
const db = require('./db');
require('dotenv').config();

const port = process.env.PORT || 3001;


const start = () =>
  db()
  .then(() => {
    startServer(port);
    console.log(`Server started on PORT ${port}`);
  })
  .catch(err => console.log(`Server is not running. ${err.message}`));

module.exports = start;