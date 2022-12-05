const express = require('express');
const pizzaController = require("../controller/pizzaController");
const pizzaRouter = express.Router();

pizzaRouter.get('/borda', async (req, res, next) => {
    user = await pizzaController.getBorda(req.headers);
    res.status(200).send(user);
})

pizzaRouter.get('/massa', async (req, res, next) => {
    user = await pizzaController.getMassa(req.headers);
    res.status(200).send(user);
})

pizzaRouter.get('/sabor', async (req, res, next) => {
    user = await pizzaController.getSabor(req.headers);
    res.status(200).send(user);
})

pizzaRouter.get('/tamanho', async (req, res, next) => {
    user = await pizzaController.getTamanho(req.headers);
    res.status(200).send(user);
})

pizzaRouter.post('/borda', async (req, res, next) => {
    user = await pizzaController.postBorda(req.headers, req.body);
    res.status(200).send(user);
})

pizzaRouter.post('/massa', async (req, res, next) => {
    user = await pizzaController.postMassa(req.headers, req.body);
    res.status(200).send(user);
})

pizzaRouter.post('/sabor', async (req, res, next) => {
    user = await pizzaController.postSabor(req.headers, req.body);
    res.status(200).send(user);
})

pizzaRouter.post('/tamanho', async (req, res, next) => {
    user = await pizzaController.postTamanho(req.headers, req.body);
    res.status(200).send(user);
})

pizzaRouter.put('/borda/:idBorda', async (req, res) => {
    resp = await pizzaController.putBorda(req.headers, req.body, req.params.idBorda);
    res.status(200).send(resp);
})

pizzaRouter.put('/massa/:idMassa', async (req, res) => {
    resp = await pizzaController.putMassa(req.headers, req.body, req.params.idMassa);
    res.status(200).send(resp);
})

pizzaRouter.put('/sabor/:idSabor', async (req, res) => {
    resp = await pizzaController.putSabor(req.headers, req.body, req.params.idSabor);
    res.status(200).send(resp);
})

pizzaRouter.put('/tamanho/:idTamanho', async (req, res) => {
    resp = await pizzaController.putTamanho(req.headers, req.body, req.params.idTamanho);
    res.status(200).send(resp);
})

module.exports = pizzaRouter;