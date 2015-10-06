var express = require('express');
var router = express.Router();

/* GET json data. */
router.get('/', function(req, res, next) {
  res.contentType('application/json');
  var people = [
    { name: 'Dave', location: 'New York',l0:40.711353,l1:-74.023132},
    { name: 'Santa', location: 'Princeton',l0:40.348114,l1:-74.621887},
    { name: 'John', location: 'Long Island',l0:40.761301,l1:-73.243103},
    { name: 'Mark', location: 'Philadephia',l0:39.932380,l1:-75.171204},
    { name: 'Rahul', location: 'Washington',l0:38.894239,l1:-77.008667},
    { name: 'Roy', location: 'Maryland',l0:39.561236,l1:-77.200928},
    { name: 'Sheena', location: 'Albany',l0:42.591511,l1:-73.839111},
    { name: 'Calie', location: 'Delaware',l0:38.606140,l1:-75.443115},
    { name: 'Mark', location: 'Portland',l0:43.538594,l1:-70.257568},
    { name: 'Ben', location: 'New Hampshire',l0:43.363129,l1:-71.510010}
  ]

  var peopleJSON = JSON.stringify(people);
  res.send(peopleJSON);
});

module.exports = router;

