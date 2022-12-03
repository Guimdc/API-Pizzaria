const express = require('express');
const pedidoController = require("../controller/pedidoController");
const pedidoRouter = express.Router();

pedidoRouter.post('/', async (req, res, next) => {
  user = await pedidoController.post(req.headers ,req.body);
  res.status(200).send(user);
})

module.exports = pedidoRouter;