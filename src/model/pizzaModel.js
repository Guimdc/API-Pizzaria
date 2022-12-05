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

postBorda = async (data) =>{
    sql=`INSERT INTO borda(borda, ativo) VALUES ('${data.borda}', 1)`;
    const result = await mysql.query(sql);

    if (result) {
        resp = { "status": "OK", bordaId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

postMassa = async (data) =>{
    sql=`INSERT INTO massa(massa, ativo) VALUES ('${data.massa}', 1)`;
    const result = await mysql.query(sql);

    if (result) {
        resp = { "status": "OK", massaId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

postSabor = async (data) =>{
    sql=`INSERT INTO sabor(sabor, ativo) VALUES ('${data.sabor}', 1)`;
    const result = await mysql.query(sql);

    if (result) {
        resp = { "status": "OK", saborId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

postTamanho = async (data) =>{
    sql=`INSERT INTO tamanho(tamanho, preco, ativo) VALUES ('${data.tamanho}', ${data.preco},1)`;
    const result = await mysql.query(sql);

    if (result) {
        resp = { "status": "OK", tamanhoId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

module.exports = { getBorda, getMassa, getSabor, getTamanho, postBorda, postMassa, postSabor, postTamanho}