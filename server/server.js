const express = require('express');
const path = require('path'); // Incluído en Node, no hace falta instalarlo con npm.

const { log } = require('../utils/logger');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next)=>{
    let messageLog = new Date().toString() + " - " + req.method + " - " + req.url;
    log(messageLog);
    next();
});

var publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

app.listen(app.get('port'), ()=>{
    let message = 'Servidor ejecutándose en el puerto: ' 
                + app.get('port') 
                + " (http://localhost:" 
                + app.get('port') + ")";
    log(message);
});