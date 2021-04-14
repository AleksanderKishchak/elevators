const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const port = process.env.PORT || 3004;
const server = express();
const router = jsonServer.router(path.join(__dirname, 'json-server/db.json'));
const middlewares = jsonServer.defaults();

const publicPath = path.join(__dirname, 'build');

server.use(express.static(publicPath));
server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, () => {
  console.log('JSON Server is running');
});
