/**
 * Created by gaggi on 4/22/17.
 */
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello Jagmohan');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
