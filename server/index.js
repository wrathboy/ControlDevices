
const produccion = false;

if (!produccion) {
    const host = "localhost";
    const user = "root";
    const password = "";
    const port = 3006;
    var expressPort = 2404
} else {
    const host = "localhost";
    const user = "root";
    const password = "";
    const port = 3006;
    var expressPort = 2404
}

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


app.post('/deviceList', cors(), function (req, res) {
    var listaDispocitivos = {
        idDispocitivo: 0,
        nombre: "",
        descripcion: "",
        tipoId: 0,
        usuarioId: 0,
        status: 0,
        creacion: "",
        mac: ""
    };
    res.status(200).json(listaDispocitivos);
});

app.post('/addDevice', cors(), function (req, res) {
    var conexion = devices.addDevice();
    console.log(conexion);
    res.status(200).json(conexion);
});

app.listen(expressPort, function () {
    console.log("Registro de Dispocitivos en: " + expressPort);
});