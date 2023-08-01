const mysql = require("mysql2");

const { config } = require("./config");

//Configuración
var mysqlConn = mysql.createConnection({
  host: config.dbHost,
  database: config.dbName,
  user: config.dbUser,
  port: config.dbPort,
});

//Conexión
mysqlConn.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos MySQL:", err.message);
  } else {
    console.log("Conexión a la base de datos MySQL exitosa");
  }
});

//Exportación
module.exports = mysqlConn;
