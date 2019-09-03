//index.js
const express = require('express');
const app = express(); 
const path = require('path');
const port = process.env.PORT || 5500;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port)