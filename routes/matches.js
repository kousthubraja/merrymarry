var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://merryuser:mpass@cluster0.elotg.mongodb.net/merrymarry?retryWrites=true&w=majority";

router.get('/:user', function (req, res) {
    const user = req.params.user;

    var query = { _user: user };

    for (let key in req.query) {
        let value = req.query[key];
        key = key.toUpperCase();
        query[key] = new RegExp(value, 'i');
    }

    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("merrymarry");

        dbo.collection("profiles").find(query).toArray(function (err, result) {
            if (err) throw err;
            res.render('match_view', {
                start: req.params.start,
                profiles: result
            });
            db.close();
        });
    });
});

router.post('/', function (req, res) {
    res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;