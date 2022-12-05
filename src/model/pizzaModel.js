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

putBorda = async (data, idBorda) => {
    sql = `UPDATE borda SET borda='${data.borda}', ativo='${data.ativo}' WHERE idborda=${idBorda}`
    const result = await mysql.query(sql);
    if (result) {
        resp = { "status": "OK"}
    }else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

putMassa = async (data, idMassa) => {
    sql = `UPDATE massa SET massa='${data.massa}', ativo='${data.ativo}' WHERE idmassa=${idMassa}`
    const result = await mysql.query(sql);
    if (result) {
        resp = { "status": "OK"}
    }else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

putSabor = async (data, idSabor) => {
    sql = `UPDATE sabor SET sabor='${data.sabor}', ativo='${data.ativo}' WHERE  idsabor=${idSabor}`
    const result = await mysql.query(sql);
    if (result) {
        resp = { "status": "OK"}
    }else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

putTamanho = async (data, idTamanho) => {
    sql = `UPDATE tamanho SET tamanho='${data.tamanho}', preco=${data.preco},ativo='${data.ativo}' WHERE  idtamanho=${idTamanho}`
    const result = await mysql.query(sql);
    if (result) {
        resp = { "status": "OK"}
    }else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

module.exports = { getBorda, getMassa, getSabor, getTamanho, postBorda, postMassa, 
    postSabor, postTamanho, putBorda, putMassa, putSabor, putTamanho }