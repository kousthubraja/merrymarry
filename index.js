var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/matches/:user/:start/:stop', function(req, res){
   let inFile = './avin_profiles.json';
   if (req.params.user === 'kr'){
      inFile = './kr_profiles.json';
   }
   var profiles = JSON.parse(fs.readFileSync(inFile, 'utf8')).slice(req.params.start, req.params.stop);
   profiles = profiles.filter(p => p.PHOTOS.length != 0);
   res.render('match_view', {
      start: req.params.start,
      profiles: profiles
   });
});

app.get('/matches/:user/filter', function(req, res){
   let inFile = './avin_profiles.json';
   if (req.params.user === 'kr'){
      inFile = './kr_profiles.json';
   }
   var profiles = JSON.parse(fs.readFileSync(inFile, 'utf8')).slice(req.params.start, req.params.stop);
   profiles = profiles.filter(p => p.PHOTOS.length != 0);
   for (let key in req.query){
      let value = req.query[key];
      key = key.toUpperCase();
      profiles = profiles.filter(p => p[key].includes(value));
   }
   
   res.render('match_view', {
      start: req.params.start,
      profiles: profiles
   });
});

app.listen(process.env.PORT || 5000);