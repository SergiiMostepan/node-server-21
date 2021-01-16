const express = require('express');
const app = express();
const cors = require('cors');

const User = require('./models/index').User;

const {
  userRouter
} = require('./routes');

const initRoutes = () => {
  app.use('/', userRouter);
};

const startServer = async port => {
  app.use(cors({
    // credentials: true,
    origin: 'http://localhost:3000'
  }));
  app.use(express.json({
    limit: '25kb'
  }));

  await User.sync();

  initRoutes();

  return app.listen(port);
};

module.exports = startServer;