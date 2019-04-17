var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyiiU6C0hUrQ66kr'}).base('appMRnonYoLXJkqvx');

/* GET home page. */
router.get('/what-if', function (req, res, next) {
  var airtableName;
  base('Students').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          if(record.get('net_id') === res.locals.user.nickname){
            airtableName = record.get('name');
            console.log("My name is ", airtableName);
          }
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

  }, function done(err) {
      if (err) { console.error(err); return; }
      res.render('what-if', { 
        title: 'What If...',
        nameTitle: airtableName
      });
  });
  
});


module.exports = router;
