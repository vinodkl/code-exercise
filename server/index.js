/* eslint-disable no-console */
/* Using ES5, mostly to use node instead of babel-node */

const compression = require('compression');
const express = require('express');
const colors = require('colors');
const path = require('path');
const fs = require('fs');

const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('.dist'));

const moviesFilePath = path.join(__dirname, 'data/artworks.json');
app.get('/api/movies', (req, res) => {
  // fs.js says:
  // var kPoolSize = 40 * 1024;
  // Reading chunks of 40960 bytes

  const readable = fs.createReadStream(moviesFilePath);
  readable.on('error', () => {
    res.writeHead(404, 'Not Found');
    res.end();
  });
  readable.pipe(res);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../.dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(colors.red(err));
  }
  console.log(colors.green(`Server running at http://localhost:${port}`));
});
