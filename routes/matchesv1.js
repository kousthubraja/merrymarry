var express = require('express');
var router = express.Router();

router.get('/matches/:user/:start/:stop', function(req, res){
   let inFile = './' + req.params.user + '_profiles.json';
   var profiles = JSON.parse(fs.readFileSync(inFile, 'utf8')).slice(req.params.start, req.params.stop);
   profiles = profiles.filter(p => p.PHOTOS.length != 0);
   res.render('match_view', {
      start: req.params.start,
      profiles: profiles
   });
});

router.get('/matches/:user/filter', function(req, res){
   let inFile = './' + req.params.user + '_profiles.json';
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

module.exports = router;