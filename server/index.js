
const produccion = false;

if (!produccion) {
    const host = "localhost";
    const user = "root";
    const password = "";
    const port = 3006;
    const expressPort = 2404
} else {
    const host = "localhost";
    const user = "root";
    const password = "";
    const port = 3006;
    const expressPort = 2404
}

//Imports
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


//Cross Origin Request Cors Header
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());


app.post('/deviceList', cors(), function (req, res) {

});