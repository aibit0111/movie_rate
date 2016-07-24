var express = require('express');
var routers = express.Router();

  routers.get('/addmovies', function (req, res) {
    res.render('addmovies', { title: 'Add Movies'});
  });

module.exports = routers;
