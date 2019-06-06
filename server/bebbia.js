
const produccion = false;


const host = "localhost";
const user = "root";
const password = "";
const port = 3006;
var expressPort = 8086;

//Imports
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");

var devices = require("./devices");

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


app.post('/update_customer', cors(), function (req, res) {
    var customer =  req.body;
    res.status(200).json(customer);
});



var server = app.listen(expressPort, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})