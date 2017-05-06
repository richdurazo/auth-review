const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router')
const mongoose = require('mongoose')

//db setup
mongoose.connect('mongodb://localhost:auth/auth');
// app setup
// any incomming request from our server will be passed into morgan and body paser 

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ', port);