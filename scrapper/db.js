const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://merryuser:mpass@cluster0.elotg.mongodb.net/merrymarry?retryWrites=true&w=majority";

function insertProfiles(profiles) {
  MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("merrymarry");
    
    dbo.collection("profiles").insertMany(profiles, function(err, res) {
      if (err) throw err;
      console.log("Inserted " + profiles.length + " profiles");
      db.close();
    });
  });
}

function getProfilesForUser (user) {
  MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("merrymarry");
    
    var query = { _user: user };
    dbo.collection("profiles").find(query).toArray(function(err, result) {
    if (err) throw err;
    db.close();
    return result;
    });
  });
}

function clearDb () {
  MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("merrymarry");
    
    var query = { _user: "kr"};
    dbo.collection("profiles").deleteMany(query, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      db.close();
    });
  });
}

// insertProfiles ('kr', [{name: 'K', address: 'Somewhere'}, {name: 'K2', address: 'Somewhere else'}]);
module.exports = {insertProfiles: insertProfiles, getProfilesForUser: getProfilesForUser, clearDb: clearDb};