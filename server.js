var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
//app.use(bodyParser.json());

app.get('/getNote', function(req, res)
{
    
        fs.readFile('./test.json', 'utf8', function(err, data) {
            if (err) throw err;
            stringifyFile = data
            res.send(data);
        })

    
}

);

var server = app.listen(3000,function(){
    console.log('Aplikacja nasłuchuje na http://localhost:3000')
}

);