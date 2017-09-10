const path = require('path');
const fs = require('fs');

let logFileName = 'server.log';     //  PENDIENTE:   Generar algo como : YYYYMMDD.log

var logsPath = path.join(__dirname, "../logs", logFileName);

const log = (message) => { 
    fs.appendFileSync(logsPath, message + "\n"); 
    console.log(message); 
};

module.exports.log = log;