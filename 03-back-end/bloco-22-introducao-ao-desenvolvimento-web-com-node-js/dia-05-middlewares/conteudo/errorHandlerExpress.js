const express = require('express');
const rescue = require('express-recue');
const fs = require('fs/promises');

const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get(
  '/:filename',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf8'));
  }),
  (err, _req, _res, next) => {
    if(err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  }
);

app.use(errorMiddleware);
app.listen(3002);
