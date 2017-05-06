const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
// app setup

//server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ', port);