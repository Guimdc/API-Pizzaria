const express = require('express');
const pedidoController = require("../controller/pedidoController");
const pedidoRouter = express.Router();

pedidoRouter.get('/', async(req, res, next)=>{
  user=await pedidoController.get(req.headers);
  res.status(200).send(user);
})

pedidoRouter.get('/:idPedido', async(req, res, next)=>{
  resp=await pedidoController.getById(req.headers, req.params.idPedido);
  res.status(200).send(resp);
});

pedidoRouter.post('/', async (req, res, next) => {
  user = await pedidoController.post(req.headers ,req.body);
  res.status(200).send(user);
})

pedidoRouter.put('/status/:idPedido', async(req, res)=>{
  resp=await pedidoController.putStatus(req.headers, req.body, req.params.idPedido );
  res.status(200).send(resp);
})

module.exports = pedidoRouter;