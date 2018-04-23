const produccion = false;

if (!produccion) {
    var host = "localhost";
    var user = "root";
    var password = "";
    var port = 3006;
    var expressPort = 2404
} else {
    var host = "localhost";
    var user = "root";
    var password = "";
    var port = 3006;
    var expressPort = 2404
}

module.exports = function () {

    var conexion = {
        host: host,
        user: user,
        password: password,
        port: port
    }

    return conexion;

}