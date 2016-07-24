var express = require('express');
var router = express.Router();
var movie = require("../schema/movies");



router.get('/:cateogre', function(req, res, next) {
    movie.getMovieBycateogry(req.params.cateogre, function (err, movie) {
        console.log('get particular :: ' + req.params.cateogre);
        if (err) {
            res.send(err.message);
        }
        else {
              res.render('cateogry',{title:'Movies','my' : movie});
        }
    });
});

module.exports = router;
