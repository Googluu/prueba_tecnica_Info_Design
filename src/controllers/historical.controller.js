const db = require("../database-MySQL");

module.exports = class historical {
  
  static getHistTramos(data, callback) {

    var consultaTramos = `SELECT c.Linea, SUM(c.Residencial + c.Comercial + c.Industrial) AS consumo, SUM(p.Residencial + p.Comercial + p.Industrial) AS perdidas, SUM(co.Residencial + co.Comercial + co.Industrial) AS costo FROM consumo_tramo c JOIN costos_tramo co ON c.Fecha = co.Fecha AND c.Linea = co.Linea JOIN perdidas_tramo p ON c.Fecha = p.Fecha AND c.Linea = p.Linea WHERE c.Fecha BETWEEN '${data.fechainicial}' AND '${data.fechafinal}' GROUP BY c.Linea ORDER BY c.Linea;`;
    
    db.query(consultaTramos, (err, resp) => {
      if (err) {
        callback(err);
      }
      callback(resp);
    });
  }

  static getHistCliente(data, callback) {

    var consultaCliente = `SELECT c.Linea, SUM(c.Residencial) AS consumo_residencial, SUM(c.Comercial) AS consumo_comercial, SUM(c.Industrial) AS consumo_industrial, SUM(p.Residencial) AS perdidas_residencial, SUM(p.Comercial) AS perdidas_comercial, SUM(p.Industrial) AS perdidas_industrial, SUM(co.Residencial) AS costo_residencial, SUM(co.Comercial) AS costo_comercial, SUM(co.Industrial) AS costo_industrial FROM consumo_tramo c JOIN costos_tramo co ON c.Fecha = co.Fecha AND c.Linea = co.Linea JOIN perdidas_tramo p ON c.Fecha = p.Fecha AND c.Linea = p.Linea WHERE c.Fecha BETWEEN '${data.fechainicial}' AND '${data.fechafinal}' GROUP BY c.Linea ORDER BY c.Linea`;
    
    db.query(consultaCliente, (err, resp) => {
      if (err) {
        callback(err);
      }
      callback(resp);
    });
  }

  static getTramosCliente(data, callback) {

    var consultaTramosCliente = `SELECT TipoConsumo, Linea, Perdidas FROM ( SELECT "Residencial" AS TipoConsumo, pt.Linea, pt.Residencial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN '${data.fechainicial}' AND '${data.fechafinal}' UNION ALL SELECT "Comercial" AS TipoConsumo, pt.Linea, pt.Comercial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN '${data.fechainicial}' AND '${data.fechafinal}' UNION ALL SELECT "Industrial" AS TipoConsumo, pt.Linea, pt.Industrial AS Perdidas FROM perdidas_tramo pt WHERE pt.Fecha BETWEEN '${data.fechainicial}' AND '${data.fechafinal}' ) AS combined_data ORDER BY TipoConsumo, Perdidas DESC LIMIT 20`;
    
    db.query(consultaTramosCliente, (err, resp) => {
      if (err) {
        callback(err);
      }
      callback(resp);
    });
  }

};
