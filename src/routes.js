var express = require('express');
var app = express();

app.get("/hello", function(req, res) {
    return res.status(200).send('Hello world!');
});

module.exports = app;