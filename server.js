var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
app.use(bodyParser.json());

app.get('/', function(req, res)
{
    res.send('Hello world');
}

);

var server = app.listen(3000,function(){
    console.log('Aplikacja nasłuchuje na http://localhost:3000')
}

);