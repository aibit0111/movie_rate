var express = require('express');
var router = express.Router();
var movie = require("../schema/movies");

router.get('/', function(req, res, next){
  movie.findAll(function(err, movie){
      if(err){
        console.log(err);
      }
      res.render('index',{title:'Movies','my' : movie});
  });
});



router.post('/', function(req, res, next) {
    movie.saveNewMovie(req.body, function (err, movie) {
        console.log('post');
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(movie);
        }
    });
});

router.get('/:id', function(req, res, next) {
    movie.getMovieById(req.params.id, function (err, movie) {
        console.log('get particular :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.render('detail',{title:movie[0].title,'my' : movie});
        }
    });
});




router.put('/:id', function(req, res, next) {
    movie.updateMovie(req.params.id, req.body, function (err, movie) {
        console.log('put :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(movie);
        }
    });
});
router.delete('/:id', function(req, res, next) {
    movie.deleteMovie(req.params.id, function (err, movie) {
        console.log('delete :: ' + req.params.id);
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(movie);
        }
    });
});




module.exports = router;
