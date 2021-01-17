var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

var matches = require('./routes/matches');
app.use('/matches', matches);

app.listen(process.env.PORT || 5000);