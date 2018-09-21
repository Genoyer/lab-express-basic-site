var express = require('express');
var app = express();
var hbs = require('hbs');
var path = require('path');

app.set('view engine', 'hbs');
app.unsubscribe(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.get('/', (request, response, rext) => {
    console.log(request);
    response.render('home');
});

app.get('/about', (request, response, next) => {
    response.render('about');
});

app.get('/photos', (request, response, next) => {
    response.render('gallery')
});

app.listen(3000, () => {
    console.log("We Live");
});