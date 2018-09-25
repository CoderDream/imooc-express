let express = require('express');
let port = process.env.PORT || 3000;
let app = express();
let path = require('path');
let Movie = require('./models/movie');

//import mongoose from 'mongoose';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imooc');

let underscore = require('underscore');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views/pages');
app.set('view engine', 'jade');

let bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


// app.use(express.bodyPraser());
app.listen(port);

console.log('imooce express started on port ' + port);

// index
app.get('/', function (req, res) {

    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('index', {
            title: 'imooc Express 首页',
            movies: movies
        });
    });
});


// 详情
app.get('/movie/:id', function (req, res) {
    let id = res.params.id;

    Movie.findById(id, function (err, movie) {
        res.render('detail', {
            title: 'imooc' + movie.title,
            movie: movie
        });
    });

});

// admin update movie
app.get('/admin/update/:id', function (req, res) {
    let id = res.params.id;

    if(id) {
        Movie.findById(id, function (err, movie) {
            res.render('admin', {
                title: 'imooc后台更新页',
                movie: movie
            });
        });
    }
});

// admin post movie
app.post('/admin/movie/new', function (req, res) {
    let id = req.body.movie._id;
    let movieObj = req.body.movie;
    let _movie;

    if (id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }

            _movie = underscore.extend(movie, movieObj);
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }

                res.redirect('/movie' + movie._id);
            });
        });
    }
    else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });

        _movie.save(function (err, movie) {
            if (err) {
                console.log(err);
            }

            res.redirect('/movie' + movie._id);
        });
    }
});

// admin
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc Express 后台录入页面',
        movie: {
            doctor: '',
            country: "",
            title: "",
            year: '',
            poster: "",
            language: "",
            flash: "",
            summary: ""
        }
    })
});


// 列表
app.get('/admin/list', function (req, res) {

    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('list', {
            title: 'imooc Express 列表页面',
            movies: movies
        });
    });
});
