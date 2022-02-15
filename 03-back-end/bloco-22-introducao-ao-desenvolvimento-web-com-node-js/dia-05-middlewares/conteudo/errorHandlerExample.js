const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:filename', async (req, res, next) => {
  try {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf8'));
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro ${err.message}`});
});

app.listen(3002);
