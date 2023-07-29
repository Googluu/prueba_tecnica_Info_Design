const mysql = require("mysql2");

//Configuración
var mysqlConn = mysql.createConnection({
  host: "localhost",
  database: "pruebainfodesign",
  user: "root",
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
