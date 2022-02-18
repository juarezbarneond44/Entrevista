const express = require('express')
app = express()
bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors({
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rutas
const ServerRouter = require('./routes/ServerRouter');


// usar est ruta 

app.use('/server', ServerRouter);



// usar este puerto para el servidor
var server = {
  port: 3000
};

app.listen(server.port,'0.0.0.0', () => console.log(`Server started, listening on port: ${server.port}`));
