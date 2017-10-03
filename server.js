var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
require ('dotenv').config();

var app = express();
var port = process.env.PORT;

app.get('/giphy', function(req, res){
    request('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=' + process.env.TOKEN, function(error, response, body){
        console.log('error: ', error); // Print the error if one occurred
        console.log('statusCode: ', response && response.statusCode); // Print the response status code if a response was received
        console.log('body: ', body); // Print the HTML for the Google homepage.
        res.status(200).send(JSON.parse (body));
    }) //process, eventually
})

app.listen(port, function(){
    console.log('listening on Satan\'s port', port);
})

