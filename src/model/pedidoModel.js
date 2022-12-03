const { query } = require("express");
const mysql = require("./mysqlConnect");

get = async () => {
    sql=`SELECT p.idpedido, m.massa, b.borda, t.tamanho, ps.nome AS cliente, p.status, p.endereço, p.date FROM pedido 
    AS p JOIN massa AS m ON p.massa_idmassa = m.idmassa JOIN borda AS b ON p.borda_idborda = b.idborda JOIN tamanho AS 
    t ON p.tamanho_idtamanho = t.idtamanho JOIN pessoa AS ps ON p.pessoa_idpessoa = ps.idpessoa`;

    const result = await mysql.query(sql);

    for (i = 0; i<result.length; i++){
        sql1=`SELECT s.sabor FROM sabor AS s JOIN pedido_sabor AS ps ON s.idsabor = ps.sabor_idsabor JOIN pedido AS p 
        ON p.idpedido = ps.pedido_idpedido WHERE ps.pedido_idpedido = ${result[i].idpedido}`
        const result1 = await mysql.query(sql1);
        const sabores = result1.map(result1 => result1.sabor);
        result[i].sabores = sabores;
    }

    return result;
}

getById = async (idPedido) => {
    sql=`SELECT p.idpedido, m.massa, b.borda, t.tamanho, ps.nome AS cliente, p.status, p.endereço, p.date FROM pedido 
    AS p JOIN massa AS m ON p.massa_idmassa = m.idmassa JOIN borda AS b ON p.borda_idborda = b.idborda JOIN tamanho AS 
    t ON p.tamanho_idtamanho = t.idtamanho JOIN pessoa AS ps ON p.pessoa_idpessoa = ps.idpessoa WHERE p.idpedido = ${idPedido}`;

    const result = await mysql.query(sql);

    if(result.length!=0){
        sql1=`SELECT s.sabor FROM sabor AS s JOIN pedido_sabor AS ps ON s.idsabor = ps.sabor_idsabor JOIN pedido AS p 
        ON p.idpedido = ps.pedido_idpedido WHERE ps.pedido_idpedido = ${idPedido}`
        const result1 = await mysql.query(sql1);
        const sabores = result1.map(result1 => result1.sabor);
        result[0].sabores = sabores;
    }
    return result;
}

post = async (data) => {
    sql = `INSERT INTO pedido(massa_idmassa, borda_idborda, pessoa_idpessoa,tamanho_idtamanho, status, endereço, date) 
        VALUES ((SELECT idmassa FROM massa WHERE massa = "${data.massa}" LIMIT 1), (SELECT idborda FROM borda WHERE borda = 
        "${data.borda}" LIMIT 1), ${data.id},(SELECT idtamanho FROM tamanho WHERE tamanho = "${data.tamanho}" LIMIT 1), "${data.status}", 
        "${data.endereco}", now())`;

    const result = await mysql.query(sql);
    id = result.insertId
    console.log(result.insertId);

    for (i = 0; i < data.sabor.length; i++) {
        sql1 = `INSERT INTO pedido_sabor(pedido_idpedido, sabor_idsabor) VALUES (${id}, (SELECT idsabor FROM sabor WHERE sabor = 
            "${data.sabor[i]}" LIMIT 1))`;
        const result = await mysql.query(sql1);
    }

    if (result) {
        resp = { "status": "OK", pedidoId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

putStatus = async (data, idPedido) =>{
    sql = `UPDATE pedido SET status="${data.status}" WHERE idpedido=${idPedido}`
    const result = await mysql.query(sql);
    if (result) {
        resp = { "status": "OK"}
    }else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

module.exports = { get, getById, post, putStatus }