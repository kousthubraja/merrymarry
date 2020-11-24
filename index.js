var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/matches/:start/:stop', function(req, res){
   var profiles = JSON.parse(fs.readFileSync('./profiles.json', 'utf8')).slice(req.params.start, req.params.stop);
   profiles = profiles.filter(p => p.PHOTOS.length != 0);
   res.render('match_view', {
      start: req.params.start,
      profiles: profiles
   });
});
app.listen(80);