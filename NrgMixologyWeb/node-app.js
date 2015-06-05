var express = require('express');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/views', express.static('views'));
app.use('/images', express.static('images'));
app.use('/scripts', express.static('scripts'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function(req, res) {
    res.render('index.html', {
        title: 'NRG Mixology'
    });
});

app.listen(3000);