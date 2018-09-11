let express = require('express');
let port = process.env.PORT || 3000;
let app = express();
let path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views/pages');
app.set('view engine', 'jade');

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// app.use(express.bodyPraser());
app.listen(port);

console.log('imooce express started on port ' + port);

// index
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc Express 首页',
        movies: [
            {
                title: "机械战警",
                _id: 1,
                poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
            },
            {
                title: "机械战警",
                _id: 2,
                poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
            },
            {
                title: "机械战警",
                _id: 3,
                poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
            },
            {
                title: "机械战警",
                _id: 4,
                poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
            },
            {
                title: "机械战警",
                _id: 5,
                poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
            }
        ]
    })
});


// 详情
app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc Express 详情',
        movie: {
            doctor: '何塞.帕迪利亚',
            country: "美国",
            title: "机械战警",
            year: 2014,
            poster: "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
            language: "英语",
            flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
            summary: "《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
        }
    })
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
    res.render('list', {
        title: 'imooc Express 列表页面',
        movies: [
            {
                title: "机械战警",
                _id: 1,
                doctor: '何塞·帕迪利亚',
                country: "美国",
                year: 2014,
                language: "英语",
                flash: "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
                summary: "《机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
            }
        ]
    })
});
