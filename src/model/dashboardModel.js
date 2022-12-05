const { query } = require("express");
const mysql = require("./mysqlConnect");

getDashBorda = async () =>{
    sql=`SELECT b.borda, COUNT(*) AS num FROM pedido AS p JOIN borda AS b ON b.idborda = p.borda_idborda GROUP BY b.borda`;
    const result = await mysql.query(sql);
    return result;
}

getDashMassa = async () =>{
    sql=`SELECT m.massa, COUNT(*) AS num FROM pedido AS p JOIN massa AS m ON m.idmassa = p.massa_idmassa GROUP BY m.massa`;
    const result = await mysql.query(sql);
    return result;
}

getDashSabor = async () =>{
    sql=`SELECT s.sabor, COUNT(*) AS num FROM sabor AS s JOIN pedido_sabor AS ps ON s.idsabor = ps.sabor_idsabor GROUP BY s.sabor`;
    const result = await mysql.query(sql);
    return result;
}

module.exports = { getDashBorda, getDashMassa, getDashSabor}