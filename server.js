var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser= require('body-parser');
app.use(bodyParser.json());

app.get('/getNote', function(req, res)
{
    
        fs.readFile('./test.json', 'utf8', function(err, data) {
            if (err) throw err;
            stringifyFile = data;
            res.send(data);
        })
        
   
}

);


app.post('/updateNote/:note', function (req, res) {   
    stringifyFile = stringifyFile + req.params.note;
   fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file updated');
})

});

var server = app.listen(8000,function(){
    console.log('Aplikacja nasłuchuje na http://localhost:8000');
}

);