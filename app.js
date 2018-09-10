let express = require('express');
let port = process.env.PORT || 3000;
let app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('imooce express started on port ' + port);

// index
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc Express 首页'
    })
});


// 详情
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc Express 详情'
    })
});


// admin
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc Express 后台录入页面'
    })
});


// 列表
app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'imooc Express 列表页面'
    })
});
