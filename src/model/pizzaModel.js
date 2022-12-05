const { query } = require("express");
const mysql = require("./mysqlConnect");

getBorda = async () =>{
    sql=`SELECT * FROM borda`;
    const result = await mysql.query(sql);
    return result;
}

getMassa = async () =>{
    sql=`SELECT * FROM massa`;
    const result = await mysql.query(sql);
    return result;
}

getSabor = async () =>{
    sql=`SELECT * FROM sabor`;
    const result = await mysql.query(sql);
    return result;
}

getTamanho = async () =>{
    sql=`SELECT * FROM tamanho`;
    const result = await mysql.query(sql);
    return result;
}

module.exports = { getBorda, getMassa, getSabor, getTamanho}