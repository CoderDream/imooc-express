let Movie = require('../models/movie.js');
//import mongoose from 'mongoose';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imooc');

let expect = require('chai').expect;
//let collection = 'imooc';

// var assert = require('assert');
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1,2,3].indexOf(4), -1);
//         });
//     });
// });

// let id = '5b98809b92f26e214c1e0a76';
// Movie.findById(id, function (err, movie) {
//     if (err) {
//         console.log(err);
//     }
//
//     console('title: ' + movie.title);
// });


// 查询数据
describe('Mongo查询方法的测试_01', function (done) {
    let result;
    beforeEach(function (done) {
        // let where = {'name': '菜鸟教程', "url": "www.runoob.com"};
        // let sort = {};
        // console.log('step 1:');
        // let db = dbf.create(config.connections.MONGO_CONNECTION);
        // console.log('step 2:' + db);
        // db.find(collection, where, sort, function (data) {
        //     console.log('step 3:');
        //     //console.log(data);
        //     result = data;
        //     done();
        // });

        this.timeout(15000);
        let id = '5b98809b92f26e214c1e0a76';
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }
            result = movie;
            //console('title: ' + movie.title);
        });
    });

    it('数据条数为0', function () {
        expect(result.length).to.be.equal(0);
    });
});
