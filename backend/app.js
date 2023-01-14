const express = require('express');
const logger = require('morgan');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.all('*', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
  next();
});

module.exports = app;
