const mysql = require("./mysqlConnect");

post = async (data) => {
    sql = `INSERT INTO pedido(massa_idmassa, borda_idborda, pessoa_idpessoa,tamanho_idtamanho, status, endereço, date) 
        VALUES ((SELECT idmassa FROM massa WHERE massa = "${data.massa}" LIMIT 1), (SELECT idborda FROM borda WHERE borda = 
        "${data.borda}" LIMIT 1), ${data.id},(SELECT idtamanho FROM tamanho WHERE tamanho = "${data.tamanho}" LIMIT 1), "${data.status}", 
        "${data.endereco}", now())`;

    const result = await mysql.query(sql);
    id = result.insertId
    console.log(result.insertId);

    for (i = 0; i < data.sabor.length; i++) {
        sql1 = `INSERT INTO pedido_sabor(pedido_idpedido, sabor_idsabor) VALUES (${id}, (SELECT idsabor FROM sabor WHERE sabor = "${data.sabor[i]}" LIMIT 1))`;
        const result = await mysql.query(sql1);
    }

    if (result) {
        resp = { "status": "OK", pedidoId: result.insertId}
    } else {
        resp = { "status": "Error", "error": result }
    }
    return resp;
}

module.exports = { post }