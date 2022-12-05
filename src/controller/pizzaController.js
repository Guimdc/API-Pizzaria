const userModel = require("../model/userModel");
const pizzaModel = require("../model/pizzaModel");

exports.getBorda = async (headers) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = await pizzaModel.getBorda();
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    console.log(resp);
    return resp;
}

exports.getMassa = async (headers) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = await pizzaModel.getMassa();
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    console.log(resp);
    return resp;
}

exports.getSabor = async (headers) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = await pizzaModel.getSabor();
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    console.log(resp);
    return resp;
}

exports.getTamanho = async (headers) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = await pizzaModel.getTamanho();
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    console.log(resp);
    return resp;
}

exports.postBorda = async (headers, data) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.postBorda(data);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.postMassa = async (headers, data) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.postMassa(data);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.postSabor = async (headers, data) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.postSabor(data);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.postTamanho = async (headers, data) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.postTamanho(data);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.putBorda = async (headers, data, idBorda) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.putBorda(data, idBorda);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.putMassa = async (headers, data, idMassa) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.putMassa(data, idMassa);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.putSabor = async (headers, data, idSabor) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.putSabor(data, idSabor);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}

exports.putTamanho = async (headers, data, idTamanho) => {
    auth = await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if (auth.idUser) {
        if (headers.iduser == auth.idUser) {
            resp = pizzaModel.putTamanho(data, idTamanho);
        } else {
            resp = { "status": "null", auth }
        }
    } else {
        resp = { "status": "null", auth }
    }
    return resp;
}