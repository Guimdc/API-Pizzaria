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

module.exports = pizzaRouter;