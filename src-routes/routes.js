var express = require('express');
var router = express.Router();

/* MAIN ROUTES */
router.get('/', function(req, res, next) {
  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile("app.html", options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: app.html');
    }
  });
});

router.get('/panel', function(req, res, next) {
  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  res.sendFile("panel.html", options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: panel.html');
    }
  });
});

module.exports = router;
