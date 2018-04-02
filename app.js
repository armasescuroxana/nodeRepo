var express = require('express'),
    mongoose = require('mongoose')


var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel')
var app = express();
var port = process.env.port || 3000;

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function (req, res) {
        var query = [];
        if (req.query.genere) {
            query.genere = req.query.genere;
        }
        Book.find(query, function (err, books) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(books)
            }
        });
    });
bookRouter.route('/Books/:bookId')
app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(port, function () {
    console.log('gulp is running on port' + port);
});


var a = 1;

function b() {
    a = 10;
    console.log('inner' + a);
    console.log('++' + typeof a);
    return;


    function a() {}
}
b();
console.log('outer' + a);
console.log('outer' + typeof a)