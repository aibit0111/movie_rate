var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var moviemodelName = "movie";
var moviemodel = mongoose.models[moviemodelName];
var validateTitle = function (data) {
    return (data && data.length > 0 ? true: false);
};
var validateRating = function (data) {
    return (!isNaN(data) ? true: false);
};
if (!moviemodel) {
    var movieSchema = new Schema({
            title: {
            type: String,
            required: true
        },
            description: {
            type: String,
            required: true
        },
            ratingimdb: {
            type: String,
            required: true
        },
            ratingrottentomtoes: {
            type: String,
            required: true
        },

            releaseyear: {
            type: String,
            required: true
        },
            noofuserrated: {
            type: String,
            required: true
            },
            timelength: {
            type: String,
            required: true
            },
            directorname: {
            type: String,
            required: true
            },
            cateogry: {
            type: String,
            required: true
            },
            language: {
                type: String,
                required: true
            },
            starcast: {
            type: String,
            required: true
            },
            storyline: {
            type: String,
            required: true
        },
            postername: {
            type: String,
            required: true
            }
    });
    moviemodel = mongoose.model(moviemodelName, movieSchema); //if there is no model then create model with modelname(movie) with schema(movieSchema)
}

var movies = {};

movies.findAll = function (cb) {
    moviemodel.find({},function (err, data) {
        if(cb) {
            cb(err, data)
        }
    });
};

movies.getMovieById = function (id, cb) {
    moviemodel.find({_id: id}, function (err, data) {
        if(cb) {
            cb(err, data)
        }
    });
};

movies.getMovieBycateogry = function (cateogre, cb) {
    moviemodel.find({cateogry: cateogre}, function (err, data) {
        if(cb) {
            cb(err, data)
        }
    });
};


movies.saveNewMovie = function (data, cb) {
    var newMovie = new moviemodel(data);
    newMovie.save(function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};

movies.updateMovie = function (id, data, cb) {
    moviemodel.update({_id: id}, data, function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};
movies.deleteMovie = function (id, cb) {
    moviemodel.remove({_id: id}, function (err, _doc) {
        if(cb) {
            cb(err, _doc)
        }
    });
};

module.exports= movies;
