var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
require ('dotenv').config();

var app = express();
var port = process.env.PORT;

app.listen(port, function(){
    console.log('listening on Satan\'s port', port);
})